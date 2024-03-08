// import express, { Request, Response } from "express";
// import { authenticateUser } from "../../middleware/authentication";
// import { createAuthor, getAuthors } from "./author.service";

// const authorRouter = express.Router();

// // 👨 Self Author
// authorRouter.get("/@self", authenticateUser, async (req: Request, res: Response) => {
//     try {
//         return res.status(200).json(req.user);
//     } catch (error: any) {
//         return res.status(500).json(error.message);
//     }
// });

// export default authorRouter;
