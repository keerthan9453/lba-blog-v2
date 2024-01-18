import { z } from "zod"

// define a schema for a blog
const BlogSchema = z.object({
    id: z.string().uuid(),
    title: z.string().min(1).max(120),
    category: z.enum([
        "AI",
        "BLOCKCHAIN",
        "CLOUD",
        "DEVOPS",
        "METAVERSE",
        "NFT",
        "WEB3",
    ]),
    description: z.string().max(256),
    content: z.string().min(1).max(16384),
    imageUrl: z.string().url(),
    authorId: z.string().uuid(),
    datePublished: z.string().datetime(),
})

// create a blog object
const blog = {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    title: "My First Blockchain Blog",
    category: "BLOCKCHAIN",
    description: "This is my first blog about blockchain",
    content: "This is my first blog",
    imageUrl: "https://www.google.com",
    authorId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    datePublished: new Date().toISOString(),
}

try {
    const validatedBlog = BlogSchema.parse(blog)
    console.log(validatedBlog)
} catch (error) {
    console.error(error)
}
