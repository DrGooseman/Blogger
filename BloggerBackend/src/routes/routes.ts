import express, { Request, Response, NextFunction, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

module.exports = router;
