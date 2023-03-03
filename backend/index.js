const express = require("express");
const { connection } = require("./config/db");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected To the Database.");
  } catch (error) {
    console.log("Failed to connect with Database.");
    console.log(error);
  }
  console.log(`Server Running on Port ${PORT}`);
});
