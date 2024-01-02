import { PrismaClient } from "@prisma/client";
const express = require("express");

const prisma = new PrismaClient();
const router = express.Router();

//// GET METHODS ////

//Get by slug
router.get("/:slug", async (req, res) => {
  const blog = await prisma.findUnique({
    where: { slug: req.params.slug },
  });

  return res.status(200).json(blog);
});

module.exports = router;
