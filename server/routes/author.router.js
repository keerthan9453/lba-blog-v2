const express = require("express")
const { authenticateUser } = require("../middleware/authentication")

const authorRouter = express.Router()

// 👨 Self Author
authorRouter.get("/@self", authenticateUser, async (req, res) => {
    try {
        const resp = new SuccessResponse({ user: req.user })
        return res.status(200).json(resp.getResponse())
    } catch (error) {
        const resp = new ErrorResponse(
            "INTERNAL_SERVER_ERROR",
            "An internal server error occured."
        )
        return res.status(500).json(resp.getResponse())
    }
})

// @TODO 📝 Update author

// @TODO 💻 Get Blog From Author

// @TODO 📋 Get All Authors

module.exports = authorRouter
