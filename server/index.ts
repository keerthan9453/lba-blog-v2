const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

dotenv.config();
if (!process.env.PORT) {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(cors()); // Using this to prevent CORS errors
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}!`);
});
