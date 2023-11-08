import router, { Request, Response } from "express";

const userRouter = router();

userRouter.get("/", (req: Request, res: Response) => {
    res.send("hi");
});

export default userRouter;
