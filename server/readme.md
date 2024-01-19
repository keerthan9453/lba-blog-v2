# LBA Blog Server

## ⚙️ Evironment Variables

```
DATABASE_URL=[SQL DATABASE URL]
CLERK_SECRET_KEY=[CLERK SECRET KEY]
PORT=[DESIRED PORT]
```

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
