const { createBlog, updateBlog, deleteBlog } = require("./blog.service")
const express = require("express")
const blogRouter = express.Router()

// @TODO Right now all routes are returning INTERNAL_SERVER_ERROR upon errors. we need to
// Warning: "/blogs/:category" and "/:id/:authorId" may lead to an overlap.

// 🆕 Create blog
blogRouter.post("/", async (req, res) => {
    try {
        // req.body is the blogData
        const blog = await createBlog(req.body)
        const resp = new SuccessResponse({ blog: blog })
        return res.status(201).json(resp.getResponse())
    } catch (error) {
        const resp = new ErrorResponse(
            "INTERNAL_SERVER_ERROR",
            "An internal server error occured."
        )
        return res.status(500).json(resp.getResponse())
    }
})

// 📝 Update blog
blogRouter.put("/:id", async (req, res) => {
    try {
        // req.body is the blogData
        const blog = await updateBlog(req.params.id, req.body)
        const resp = new SuccessResponse({ blog: blog })
        return res.status(200).json(resp.getResponse())
    } catch (error) {
        const resp = new ErrorResponse(
            "INTERNAL_SERVER_ERROR",
            "An internal server error occured."
        )
        return res.status(500).json(resp.getResponse())
    }
})

// ❌ Delete blog
blogRouter.delete("/:id", async (req, res) => {
    try {
        const blog = await deleteBlog(req.params.id, req.body)
        const resp = new SuccessResponse({ blog: blog })
        return res.status(200).json(resp.getResponse())
    } catch (error) {
        const resp = new ErrorResponse(
            "INTERNAL_SERVER_ERROR",
            "An internal server error occured."
        )
        return res.status(500).json(resp.getResponse())
    }
})

// 🔎 Get blog By author id
blogRouter.get("/:id/:authorId", async (req, res) => {
    try {
        const blog = await getBlogByAuthorId(
            req.params.id,
            req.params.authorId,
            req.body
        )
        const resp = new SuccessResponse({ blog: blog })
        return res.status(200).json(resp.getResponse())
    } catch (error) {
        const resp = new ErrorResponse(
            "INTERNAL_SERVER_ERROR",
            "An internal server error occured."
        )
        return res.status(500).json(resp.getResponse())
    }
})

// 🔎 Get ALL blogs
blogRouter.get("/blogs", async (req, res) => {
    try {
        const blogs = await getAllBlogs()
        const resp = new SuccessResponse({ blogs: blogs })
        return res.status(200).json(resp.getResponse())
    } catch (error) {
        const resp = new ErrorResponse(
            "INTERNAL_SERVER_ERROR",
            "An internal server error occured."
        )
        return res.status(500).json(resp.getResponse())
    }
})

// 🔎 Get blog by catagory
blogRouter.get("/blogs/:category", async (req, res) => {
    try {
        const blogs = await getBlogsByCategory(req.params.category)
        const resp = new SuccessResponse({ blogs: blogs })
        return res.status(200).json(resp.getResponse())
    } catch (error) {
        const resp = new ErrorResponse(
            "INTERNAL_SERVER_ERROR",
            "An internal server error occured."
        )
        return res.status(500).json(resp.getResponse())
    }
})

module.exports = blogRouter
