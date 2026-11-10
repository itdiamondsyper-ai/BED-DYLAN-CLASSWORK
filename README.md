# BED - Dylan - Classwork

## Session 1: Book Category API

Open a terminal in `session1-bookcat-api`, then run:

```powershell
npm.cmd install
npm.cmd start
```

The server listens at http://localhost:3000. Stop it with Ctrl+C.

In VS Code, open this classwork folder and press F5 to run the saved **Run Book Category API** configuration. Its output appears in the Debug Console. Use Shift+F5 to stop it. Run only one copy at a time so port 3000 stays available.

| Path | Response |
| --- | --- |
| `/` | Welcome to the Book Category API |
| `/categories` | Fiction, Non-Fiction, and Biography as JSON |
| `/about` | Dylan's short introduction |

The temporary SQL connection test is excluded from the final app, as required by the exercise. Local database credentials, if configured, belong in `.env`, which Git ignores. Never upload that file or `node_modules`.

Verified locally: all three routes return HTTP 200; Postman returns the expected JSON for `/categories` and the introduction for `/about`. The separate Node.js SQL connection check successfully counted 6 authors in NPBookstore.
