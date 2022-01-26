import express from "express";

export const CelularesRoutes = express.Router();

CelularesRoutes.get("/", CelularesControllers.index);
