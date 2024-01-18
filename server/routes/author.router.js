const AuthorService = require("./author.service")
const express = require("express")
const authenticateUser = require("../middleware/authentication")

const authorRouter = express.Router()

// ✏️ Signup Author
authorRouter.post("/signup", async (req, res) => {})

//  🔑 Login Author
authorRouter.post("/login", async (req, res) => {})

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
