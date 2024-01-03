import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const express = require("express");

const prisma = new PrismaClient();
const router = express.Router();

router.put("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const blog = await prisma.user.create({
        // Add id creator
      name: req.body.name,
      emailAddress: req.body.emailAddress,
      password: req.body.password,
      posts: req.body.posts,
      imageURL: req.body.imageURL,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt
    });
    return res.status(200).json(blog);
  });

module.exports = router;