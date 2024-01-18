const db = require("../utils/db.server")

// @TODO 📝 Fetch blogs by specific author id
const getBlogByAuthorId = async (authorId) => {
    return db.blog.findMany({
        where: {
            authorId: authorId,
        },
    })
}

// @TODO 💻 Retrieve all blogs from database
const getAllBlogs = async () => {
    return db.blog.findMany()
}

// @TODO 📋 Fetch blogs belonging to a specific category
const getBlogByCategory = async (category) => {
    return db.blog.findMany({
        where: {
            category: category,
        },
    })
}

// mutations
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
        where: { id: String(id) },
        data: blogData,
    })
}

const deleteBlog = async () => {
    return db.blog.delete({
        where: { id: String(id) },
    })
}

module.exports = {
    createBlog,
    updateBlog,
    deleteBlog,
    getBlogByAuthorId,
    getAllBlogs,
    getBlogByCategory,
}
