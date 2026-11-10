# BED - Dylan - Classwork

## Session 1: Book Category API

Open a terminal in `session1-bookcat-api`, then run:

```powershell
npm.cmd install
npm.cmd start
```

The server listens at http://localhost:3000. Stop it with Ctrl+C.

| Path | Response |
| --- | --- |
| `/` | Welcome to the Book Category API |
| `/categories` | Fiction, Non-Fiction, and Biography as JSON |
| `/about` | Dylan's short introduction |

The temporary SQL connection test is excluded from the final app, as required by the exercise. Local database credentials, if configured, belong in `.env`, which Git ignores. Never upload that file or `node_modules`.
