import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

function run(...args) {
  const result = spawnSync(process.execPath, ['scripts/course.mjs', ...args], {
    cwd: root,
    encoding: 'utf8',
    timeout: 15_000,
  })
  if (result.error) throw result.error
  return { status: result.status, output: result.stdout + result.stderr }
}

test('standalone mode requires a target and rejects traversal', () => {
  for (const args of [['--standalone'], ['../../outside', '--standalone']]) {
    const result = run(...args)
    assert.equal(result.status, 1)
    assert.match(result.output, /Standalone mode requires/)
  }
})

test('unknown and unsupported targets fail explicitly before Vite starts', () => {
  const unknown = run('day-3/exercises/does-not-exist/starter', '--standalone')
  assert.equal(unknown.status, 1)
  assert.match(unknown.output, /Unknown standalone target/)

  const unsupported = run('day-3/exercises/podcast-navigator/starter', '--standalone')
  assert.equal(unsupported.status, 1)
  assert.match(unsupported.output, /does not support standalone mode/)
})

test('every StreamBox variant supports standalone mode and forwards Vite flags', () => {
  const slugs = ['streambox-pages', 'streambox-layout', 'streambox-movie-details', 'streambox-genre-filter', 'streambox-search-and-sort']
  const targets = slugs.flatMap((slug) => ['starter', 'solution'].map((variant) => `day-3/exercises/${slug}/${variant}`))
  targets.push('day-3/demo/streambox')

  for (const target of targets) {
    const result = run(target, '--standalone', '--help')
    assert.equal(result.status, 0, result.output)
    assert.ok(result.output.includes(`Standalone target: ${target}`))
    assert.match(result.output, /--port/)
  }
})

test('the existing launcher, sandbox, and direct-target command still accept Vite flags', () => {
  for (const args of [['--help'], ['sandbox', '--help'], ['day-1/exercises/counter/solution', '--help']]) {
    const result = run(...args)
    assert.equal(result.status, 0, result.output)
    assert.doesNotMatch(result.output, /Standalone target:/)
    assert.match(result.output, /--port/)
  }
})
