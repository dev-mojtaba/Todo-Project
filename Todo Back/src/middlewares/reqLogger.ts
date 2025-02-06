import { NextFunction, Request, Response } from "express";

function reqLogger(req: Request, res: Response, next: NextFunction) {
  console.log(
    `[${new Date().toLocaleString()}] ${req.method.toUpperCase()} request sent to ${
      req.baseUrl
    }${req.url} at ${new Date().toISOString()}`
  );
  next();
}

export default reqLogger;
