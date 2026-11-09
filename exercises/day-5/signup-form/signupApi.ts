export interface UsernameCheckResult {
  username: string
  valid: boolean
  reason?: 'required' | 'not-allowed' | 'already-in-use'
  message: string
}

export interface UsernameCheckFeedback {
  status: 'success' | 'error'
  message: string
}

export interface SignupResult {
  success: boolean
  username: string
  message: string
}

export interface SignupSubmissionFeedback {
  status: 'success' | 'error'
  message: string
}

async function requestJson<Result>(url: string, init?: RequestInit): Promise<Result> {
  let response: Response
  try {
    response = await fetch(url, init)
  } catch {
    throw new Error('The request could not be completed. Try again.')
  }

  const result = await response.json().catch(() => null) as {
    message?: unknown
  } | null

  if (!response.ok) {
    const message = typeof result?.message === 'string'
      ? result.message
      : 'The request could not be completed. Try again.'
    throw new Error(message)
  }

  if (result === null) throw new Error('The server returned an invalid response.')
  return result as Result
}

export async function checkUsername(username: string): Promise<UsernameCheckFeedback> {
  try {
    const response = await requestJson<UsernameCheckResult>(`/api/usernames/check?username=${encodeURIComponent(username)}`)
    return {
      status: response.valid ? 'success' : 'error',
      message: response.message,
    }
  } catch {
    return {
      status: 'error',
      message: 'Could not check this username. Try again.',
    }
  }
}

export async function submitSignup(username: string): Promise<SignupSubmissionFeedback> {
  try {
    const result = await requestJson<SignupResult>('/api/signup', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ username }),
    })
    return { status: 'success', message: result.message }
  } catch (error) {
    return {
      status: 'error',
      message: error instanceof Error ? error.message : 'The request could not be completed. Try again.',
    }
  }
}