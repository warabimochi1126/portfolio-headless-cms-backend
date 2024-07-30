import { Request, Response, NextFunction } from "express";

export function imageToR2(req: Request, res: Response, next: NextFunction) {
    console.log("middleware発火");
}