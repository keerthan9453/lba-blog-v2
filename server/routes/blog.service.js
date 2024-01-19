const db = require("../utils/db.server")

/**
 * Fetches blogs by a specific author ID.
 * @param {string} authorId - The ID of the author.
 * @returns {Promise<Array>} A promise that resolves to an array of blogs.
 */
const getBlogByAuthorId = async (authorId) => {
    return db.blog.findMany({
        where: {
            authorId: authorId,
        },
    })
}

/**
 * Retrieves all blogs from the database.
 * @returns {Promise<Array>} A promise that resolves to an array of all blogs.
 */
const getAllBlogs = async () => {
    return db.blog.findMany()
}

/**
 * Fetches blogs belonging to a specific category.
 * @param {string} category - The category of the blogs.
 * @returns {Promise<Array>} A promise that resolves to an array of blogs in the specified category.
 */
const getBlogByCategory = async (category) => {
    return db.blog.findMany({
        where: {
            category: category,
        },
    })
}

/**
 * Creates a new blog entry in the database.
 * @param {Object} blogData - The data of the blog to be created.
 * @returns {Promise<Object>} A promise that resolves to the created blog object.
 */
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

/**
 * Updates an existing blog entry in the database.
 * @param {string} id - The ID of the blog to be updated.
 * @param {Object} blogData - The new data for the blog.
 * @returns {Promise<Object>} A promise that resolves to the updated blog object.
 */
const updateBlog = async (id, blogData) => {
    return db.blog.update({
        where: { id: String(id) },
        data: blogData,
    })
}

/**
 * Deletes a blog entry from the database.
 * @param {string} id - The ID of the blog to be deleted.
 * @returns {Promise<Object>} A promise that resolves to the deleted blog object.
 */
const deleteBlog = async (id) => {
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
