const db = require("../utils/db.server")

const createBlog = async (blogData) => {
    return db.blog.create({
        data: {
            title: blogData.title,
            category: blogData.category,
            description: blogData.description,
            content: blogData.content,
            imageUrl: blogData.imageUrl,
            authorId: blogData.authorId,
            datePublished: blogData.datePublished,
        },
        select: {
            id: true,
        },
    })
}

const updateBlog = async (id, blogData) => {
    return db.blog.update({
        where: { id: Number(id) },
        data: blogData,
    })
}

const deleteBlog = async () => {
    return db.blog.delete({
        where: { id: Number(id), data: blogData },
    })
}

module.exports = { createBlog, updateBlog, deleteBlog }
