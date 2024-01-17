// import { PrismaClient } from "@prisma/client";
import express from "express";
// import { body, validationResult } from "express-validator";
import * as AuthorService from "./author.service";

export const authorRouter = express.Router();

// signup author
authorRouter.post("/signup", async (req, res) => {});

// login author
authorRouter.post("/login", async (req, res) => {});

// Update author
authorRouter.put("/:id", async (req, res) => {});

// Get author blog
authorRouter.get("/blogs/:authorId", async (req, res) => {});

// GET: List of all Authors
authorRouter.get("/authors", async (req, res) => {
  try {
    const authors = await AuthorService.listAuthors();
    console.log(authors);
    return res.status(200).json(authors);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// module.exports = router;
