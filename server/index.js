import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { authorRouter } from "./routes/author.router";
import { blogRouter } from "./routes/blog.router";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10);

const app = express();

app.use(cors()); // Using this to prevent CORS errors
app.use(express.json());
app.use("/api/authors", authorRouter);

// create Blog
app.use("/api/blogs", blogRouter);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}!`);
});
