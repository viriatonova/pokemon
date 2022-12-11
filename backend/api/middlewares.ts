import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

/**
 * Send default menssage when get a no existent route
 * @param req 
 * @param res 
 */
export const routeDefaultMiddleware = (req: Request, res: Response) => {
    res.status(404);
    if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else {
        res.type('txt').send("404 Not Found");
    }
}


export const healthChecker = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ "message": "Api is running" })
}