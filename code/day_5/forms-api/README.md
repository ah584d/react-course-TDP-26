# Day 5 Forms API

This prepared API lets the React signup-form exercise practice asynchronous
validation and submission without building a backend or connecting a database.

## Run it

From the repository root, start the API in one terminal:

```sh
npm run day5:api
```

Start the course app in a second terminal:

```sh
npm run course
```

The course app proxies `/api` requests to this server, so React code can use
relative URLs such as `/api/usernames/check?username=alex` without configuring
CORS. The API listens on `http://127.0.0.1:3001` by default. Set
`DAY5_API_PORT` to use another port and update the Vite proxy if needed.

## Username rules

The allowed usernames are `alex`, `casey`, `jamie`, `jordan`, `morgan`, `riley`,
`sam`, and `taylor`. Username checks are case-insensitive and ignore surrounding
whitespace. `sam` starts as already in use; the other allowed names start
available.

### Check availability

```http
GET /api/usernames/check?username=alex
```

An invalid or unavailable name is a normal validation result (`200`), not an API
failure:

```json
{
  "username": "alex",
  "valid": true,
  "message": "That username is available."
}
```

When a name cannot be used, `valid` is `false` and `reason` is one of `required`,
`not-allowed`, or `already-in-use`.

### Submit signup

```http
POST /api/signup
Content-Type: application/json

{"username":"alex"}
```

The API checks the username again when submitting. It returns `201` and marks the
username as in use on success, `400` for a missing or disallowed name, and `409`
when the name is already in use. The API only uses the `username` field; it does
not store passwords or other signup details.

Both endpoints wait about 700 ms so the React loading states are visible during
the lesson. Username usage is held in memory and resets whenever the API process
restarts. This is intentionally a classroom simulation, not production signup
infrastructure.