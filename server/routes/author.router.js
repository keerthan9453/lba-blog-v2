const AuthorService = require("./author.service")
const express = require("express")
const { authenticateUser } = require("../middleware/authentication")
const { Clerk } = require("@clerk/clerk-sdk-node")

const authorRouter = express.Router()

// @TODO move 🪦
const clerk = Clerk({ secretKey: process.env.CLERK_SECRET_KEY })

// ✏️ Signup Author
authorRouter.post("/signup", async (req, res) => {})

//  🔑 Login Author
authorRouter.post("/login", async (req, res) => {
    try {
        const { sessionToken } = req.body

        if (!sessionToken) {
            return res.status(400).json({ error: "Session token is required" })
        }

        const session = await clerk.sessions.verifySession(sessionToken)

        if (!session) {
            return res.status(401).json({ error: "Invalid session token" })
        }

        const user = await clerk.users.getUser(session.userId)

        res.status(200).json({ message: "Login successful", user: user })
    } catch (error) {
        console.error("Login error:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 👨 Self Author
authorRouter.get("/@self", authenticateUser, async (req, res) => {
    try {
        const author = await AuthorService.findAuthorById(req.userId)
        return res.status(200).json(author)
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

// 📝 Update author
authorRouter.put("/:id", async (req, res) => {})

// 💻 Get Blog From Author
authorRouter.get("/blogs/:authorId", async (req, res) => {})

// 📋 Get All Authors
authorRouter.get("/authors", async (req, res) => {
    try {
        const authors = await AuthorService.listAuthors()
        console.log(authors)
        return res.status(200).json(authors)
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

module.exports = authorRouter
