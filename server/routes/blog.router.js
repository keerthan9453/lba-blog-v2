import express from "express";
import { createBlog, updateBlog, deleteBlog } from "../services/blog.service";

const blogRouter = express.Router();

// createBlog
blogRouter.post("/", async (req, res) => {
  try {
    // req.body is the blogData
    const blog = await createBlog(req.body);
    return res.status(201).json(blog);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// updateBlog
blogRouter.put("/:id", async (req, res) => {
  try {
    // req.body is the blogData
    const blog = await updateBlog(req.params.id, req.body);
    return res.status(200).json(blog);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// deleteBlog
blogRouter.delete("/:id", async (req, res) => {
  try {
    const blog = await deleteBlog(req.params.id, req.body);
    return res.status(200).json(blog);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = blogRouter;
