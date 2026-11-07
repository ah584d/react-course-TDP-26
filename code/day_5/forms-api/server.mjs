import { createServer } from 'node:http'

const host = '127.0.0.1'
const port = Number(process.env.DAY5_API_PORT ?? 3001)
const allowedUsernames = new Set([
  'alex',
  'casey',
  'jamie',
  'jordan',
  'morgan',
  'riley',
  'sam',
  'taylor',
])
const inUseUsernames = new Set(['sam'])

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { 'content-type': 'application/json; charset=utf-8' })
  response.end(JSON.stringify(payload))
}

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

function normalizeUsername(value) {
  return typeof value === 'string' ? value.trim().toLowerCase() : ''
}

function getUsernameValidation(username) {
  if (!username) {
    return { valid: false, reason: 'required', message: 'Enter a username.' }
  }

  if (!allowedUsernames.has(username)) {
    return {
      valid: false,
      reason: 'not-allowed',
      message: 'Choose a username from the allowed list.',
    }
  }

  if (inUseUsernames.has(username)) {
    return {
      valid: false,
      reason: 'already-in-use',
      message: 'That username is already in use.',
    }
  }

  return { valid: true, message: 'That username is available.' }
}

async function readJsonBody(request) {
  const chunks = []
  let size = 0

  for await (const chunk of request) {
    size += chunk.length
    if (size > 16_384) {
      const error = new Error('Request body is too large.')
      error.statusCode = 413
      throw error
    }
    chunks.push(chunk)
  }

  if (size === 0) return null

  try {
    const body = JSON.parse(Buffer.concat(chunks).toString('utf8'))
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      throw new Error('Expected a JSON object.')
    }
    return body
  } catch {
    const error = new Error('Send a valid JSON object.')
    error.statusCode = 400
    throw error
  }
}

const server = createServer(async (request, response) => {
  const requestUrl = new URL(request.url ?? '/', `http://${host}:${port}`)

  if (request.method === 'GET' && requestUrl.pathname === '/api/health') {
    sendJson(response, 200, { ok: true })
    return
  }

  if (requestUrl.pathname === '/api/usernames/check') {
    if (request.method !== 'GET') {
      sendJson(response, 405, { message: 'Use GET to check a username.' })
      return
    }

    const username = normalizeUsername(requestUrl.searchParams.get('username'))
    await wait(700)
    sendJson(response, 200, { username, ...getUsernameValidation(username) })
    return
  }

  if (requestUrl.pathname === '/api/signup') {
    if (request.method !== 'POST') {
      sendJson(response, 405, { message: 'Use POST to submit signup.' })
      return
    }

    try {
      const body = await readJsonBody(request)
      const username = normalizeUsername(body?.username)

      await wait(700)

      // Recheck immediately before claiming so a previous availability check is never trusted.
      const validation = getUsernameValidation(username)
      if (!validation.valid) {
        const statusCode = validation.reason === 'already-in-use' ? 409 : 400
        sendJson(response, statusCode, { username, ...validation })
        return
      }

      inUseUsernames.add(username)
      sendJson(response, 201, {
        success: true,
        username,
        message: 'Signup accepted.',
      })
    } catch (error) {
      sendJson(response, error.statusCode ?? 400, {
        message: error.message ?? 'Could not read the signup request.',
      })
    }
    return
  }

  sendJson(response, 404, { message: 'Endpoint not found.' })
})

server.listen(port, host, () => {
  console.log(`Day 5 forms API listening at http://${host}:${port}`)
})