const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const blogRouter = require("./routes/blog.router");
const authorRouter = require("./routes/author.router");

dotenv.config();

const PORT = 5500;

// if (!process.env.PORT) {
//   let PORT = 5500;
// }
// const PORT = parseInt(process.env.PORT, 10);

const app = express();

app.use(express.json());

app.use(cors()); // Using this to prevent CORS errors

// Import routes
app.use(authorRouter);
app.use(blogRouter);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}!`);
});
