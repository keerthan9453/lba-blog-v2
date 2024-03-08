import { z } from "../../../node_modules/zod";

// define a schema for a blog
const BlogSchema = z.object({
    title: z
        .string()
        .min(3, { message: "Title must be 3 characters long" })
        .max(120, { message: "Title must be 120 characters or less" }),
    category: z.enum([
        "AI",
        "BLOCKCHAIN",
        "CLOUD",
        "DEVOPS",
        "METAVERSE",
        "NFT",
        "WEB3",
    ]),
    description: z
        .string()
        .min(3, { message: "Description must be more than 3 characters" })
        .max(512, { message: "Description must be 512 characters or less" }),
    content: z
        .string()
        .min(100, { message: "Content must be more than 100 characters" })
        .max(16384, { message: "Content must be 16384 characters or less" }),
    imageUrl: z.string().url(),
    slug: z.string(),
});

export default BlogSchema;
