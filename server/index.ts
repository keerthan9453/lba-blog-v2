const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors()); // Using this to prevent CORS errors

app.use(express.json());

app.listen(4000, () => {
  console.log(`Server started on port: 4000!`);
});
