console.log("hello");
import express from "express";
import dotenv from "dotenv";

import userRouter from "./src/user/user.router";

dotenv.config();

const app = express();

app.use("/user", userRouter);

const port = process.env.PORT ?? "9090";

app.listen(port, () => {
    console.log(`Server is loaded on ${port}`);
});
