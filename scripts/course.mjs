import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'
import { access } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const standalone = process.argv.slice(2).includes('--standalone')
const rawArgs = process.argv.slice(2).filter((arg) => arg !== '--standalone')
const hasTargetArg = rawArgs[0] && !rawArgs[0].startsWith('-')
const target = hasTargetArg ? rawArgs[0] : ''
const viteArgs = hasTargetArg ? rawArgs.slice(1) : rawArgs
const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

if (standalone) {
  const match = /^(day-\d+)\/(demo\/[a-z0-9-]+|exercises\/[a-z0-9-]+\/(?:starter|solution))$/.exec(target)

  if (!match) {
    console.error('Standalone mode requires a demo or exercise target, for example:')
    console.error('npm run course -- day-3/exercises/streambox-pages/starter --standalone --port 5174')
    process.exit(1)
  }

  const targetDirectory = resolve(projectRoot, match[2].startsWith('demo/') ? 'demo' : 'exercises', match[1], ...match[2].split('/').slice(1))

  for (const filename of ['entry.tsx', 'StandaloneApp.tsx']) {
    const path = resolve(targetDirectory, filename)
    try {
      await access(path)
    } catch (error) {
      if (error.code !== 'ENOENT') throw error
      console.error(filename === 'entry.tsx'
        ? `Unknown standalone target: "${target}". No entry.tsx exists at ${targetDirectory}.`
        : `Target "${target}" does not support standalone mode. It needs StandaloneApp.tsx and a named StandaloneApp entry export.`)
      process.exit(1)
    }
  }

  console.log(`Standalone target: ${target}`)
  console.log('App-only view at /. Use the Vite URL below; restart with another target to switch checkpoints.')
}

const require = createRequire(import.meta.url)
const vitePackageJson = require.resolve('vite/package.json')
const viteCli = resolve(dirname(vitePackageJson), 'bin', 'vite.js')

const child = spawn(process.execPath, [viteCli, ...viteArgs], {
  cwd: projectRoot,
  stdio: 'inherit',
  env: {
    ...process.env,
    VITE_COURSE_TARGET: target,
    VITE_COURSE_STANDALONE: standalone ? 'true' : 'false',
  },
})

child.on('exit', (code) => {
  process.exit(code ?? 0)
})

child.on('error', (error) => {
  console.error('Failed to start Vite. Run "npm install" first.')
  console.error(error)
  process.exit(1)
})