const db = require("../utils/db.server")

/**
 * Finds a single author by their unique identifier.
 *
 * @param {number | string} authorId - The unique identifier of the author.
 * @returns {Promise<object | null>} The author object if found, otherwise null.
 */
const findAuthorById = async (authorId) => {
    return db.author.findUnique({
        where: {
            id: authorId,
        },
        include: {
            Author: true,
        },
    })
}

const listAuthors = async () => {
    return db.author.findMany({
        include: {
            Author: true,
        },
    })
}

module.exports = { listAuthors }
