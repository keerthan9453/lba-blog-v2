const { createBlog, updateBlog, deleteBlog } = require("./blog.service")
const express = require("express")
const blogRouter = express.Router()

// 🖊️ Create Blog
blogRouter.post("/", async (req, res) => {
    try {
        // req.body is the blogData
        const blog = await createBlog(req.body)
        return res.status(201).json(blog)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// 📝 Update Blog
blogRouter.put("/:id", async (req, res) => {
    try {
        // req.body is the blogData
        const blog = await updateBlog(req.params.id, req.body)
        return res.status(200).json(blog)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// ❌ Delete Blog
blogRouter.delete("/:id", async (req, res) => {
    try {
        const blog = await deleteBlog(req.params.id, req.body)
        return res.status(200).json(blog)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// 🔎 Get Blog
blogRouter.get("/:id/:authorId", async (req, res) => {})

// 🔎 Get ALL Blogs
blogRouter.get("/blogs", async (req, res) => {})

// 🔎 Get Blogs By Catagory
blogRouter.get("/blogs/:category", async (req, res) => {})

module.exports = blogRouter
