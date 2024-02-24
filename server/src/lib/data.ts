import { db } from "./db"

//Get all available blogs in the database
export async function getBlogs() {
    return await db.blog.findMany()
}

//Get blog by id
export async function getBlogById(id: string) {
    return await db.blog.findUnique({
        where: {
            id,
        },
    })
}
