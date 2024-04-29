const express = require("express");
const cors = require("cors");
const app = express();

userRouter = require("./Controller/Routes/User");
adminRouter = require("./Controller/Routes/Adminroutes");
equipmentRouter = require("./Controller/Routes/Equipmentroutes");

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/equipment", equipmentRouter);

console.log("(🌸◕ワ◕)(⁄ ⁄◕⁄ω⁄◕⁄ ⁄✿)");
app.listen(3005);
