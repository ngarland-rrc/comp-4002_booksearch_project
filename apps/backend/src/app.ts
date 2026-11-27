import "dotenv/config";
import express from "express";
import cors from "cors";
import type { Request, Response, NextFunction } from "express";

const app = express();

// Optional if groupmates want to use an enviroment variable, otherwise default to localhost:5173
const frontendUrl = process.env.FRONTEND_URL ?? "http://localhost:5173";

if (!frontendUrl) {
    throw new Error("FRONTEND_URL environment variable is not set");
}

app.use(cors({ origin: frontendUrl }));
app.use(express.json());

// Test to make sure API is running
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Book Search API is running!"
    });
});

// Error handling middleware
app.use((
    error: unknown,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
});

export default app;