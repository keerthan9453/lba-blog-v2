// import { PrismaClient } from "@prisma/client";
import express from "express";
import { Request, Response } from "express";
// import { body, validationResult } from "express-validator";
import * as AuthorService from "./author.service";

export const authorRouter = express.Router();

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

// router.put("/:id", async (req: Request, res: Response) => {
//     const id = req.params.id;
//     const blog = await prisma.user.create({
//         // Add id creator
//       name: req.body.name,
//       emailAddress: req.body.emailAddress,
//       password: req.body.password,
//       posts: req.body.posts,
//       imageURL: req.body.imageURL,
//       createdAt: req.body.createdAt,
//       updatedAt: req.body.updatedAt
//     });
//     return res.status(200).json(blog);
//   });

// module.exports = router;
