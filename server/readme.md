# 🗞️ LBA Blog API

## Environment Variables

An example .env file is below.

```
PORT=
```

<<<<<<< Updated upstream
## 🟢 Get Started

1. Clone the project using `git clone`
2. Create a .env variable with the environment variables at the top of this readme.
3. Use `npm install` to install all dependencies.
4. Use `npm run dev` to run the server.

## 🌐 API Responses

All endpoints of this API return requests in one of the two formats.

### ✅ Example Successful Response

```
{
  "success": true,
  "data": {
    "user": "user object here"
    ... Any other returned data goes here
  }
}
```

### ❌ Example Error Response

```
{
  "success": false,
  "error": "UNAUTHRORIZED",
  "userFacingError": "You do not have permission to view this page."
}
```
=======
-   PORT: The port the server will run on. Ex. 4000. If no port is set the server will listen on port 3000.
>>>>>>> Stashed changes
