// import { PrismaClient } from "@prisma/client";
import express from "express";
import { Request, Response } from "express";
// import { body, validationResult } from "express-validator";
import * as AuthorService from "./author.service";

export const authorRouter = express.Router();

// signup author
// login author
// Update author
// Get autho blog

// GET: List of all Authors
authorRouter.get("/", async (req, res) => {
  try {
    const authors = await AuthorService.listAuthors();
    console.log(authors);
    return res.status(200).json(authors);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// module.exports = router;
