const express = require("express")
const { authenticateUser } = require("../middleware/authentication")

const authorRouter = express.Router()

// 👨 Self Author
authorRouter.get("/@self", authenticateUser, async (req, res) => {
    try {
        return res.status(200).json(req.user)
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

// @TODO 📝 Update author

// @TODO 💻 Get Blog From Author

// @TODO 📋 Get All Authors

module.exports = authorRouter
