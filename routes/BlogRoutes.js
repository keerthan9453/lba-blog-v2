import { PrismaClient } from "@prisma/client";
const express = require("express");

const prisma = new PrismaClient();
const router = express.Router();

//// GET METHODS ////

// Get all blogs
router.get("/", async (req, res) => {
  const blogs = await prisma.blog.findMany();
  return res.status(200).json(blogs);
});

// Get all blogs by author
router.get("/:categories", async (req, res) => {
  const blogs = await prisma.blog.findMany({
    //where: { category: req.params.category },
  });

});

// Get all blogs by category
router.get("/:author", async (req, res) => {
  const blogs = await prisma.blog.findMany({
    where: { author: req.params.author },
  });

  return res.status(200).json(blogs);
});

// Get by id
router.get("/:id", async (req, res) => {
  const blog = await prisma.blog.findUnique({
    where: { id: req.params.id },
  });

  return res.status(200).json(blog);
});


//// POST METHODS ////
// Create a new blog
router.post("/", async (req, res) => {
  const blog = await prisma.blog.create({
    data: {
      slug: req.body.slug,
      title: req.body.title,
      date: req.body.date,
      category: req.body.category,
      imageURL: req.body.imageURL,
      description: req.body.description,
      content: req.body.content,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt
    }
  });
  return res.status(200).json(blog);
});


//// PUT METHODS ////

// Update blog by the slug
router.put("/:id", async (req, res) => {
  const { id } = req.params.id;
  const blog = await prisma.blog.update({
    where: { id },
    slug: req.body.slug,
    title: req.body.title,
    date: req.body.date,
    category: req.body.category,
    imageURL: req.body.imageURL,
    description: req.body.description,
    content: req.body.content,
    updatedAt: req.body.updatedAt
  });
  return res.status(200).json(blog);
});


//// DELETE METHODS ////

// Delete a blog by id
router.delete("/:id", async (req, res) => {
  const blog = await prisma.blog.delete({
    where: { id: req.params.id },
  });

  return res.status(200).json(blog);
});

module.exports = router;