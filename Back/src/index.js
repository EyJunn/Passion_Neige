const express = require("express");
const cors = require("cors");
const app = express();

userRouter = require("./Controller/Routes/User");

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

console.log("(🌸◕ワ◕)(⁄ ⁄◕⁄ω⁄◕⁄ ⁄✿)");
app.listen(3005);
