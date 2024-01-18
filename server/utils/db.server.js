const { PrismaClient } = require("@prisma/client")

// singleton pattern to ensure only one single instance of PrismaClient is created
let db

// check if db global PrismaClient instance exists. If not, create a new one
if (!global.__db) {
    global.__db = new PrismaClient()
}

// assign the global PrismaClient instance to the db variable
db = global.__db

module.exports = { db }
