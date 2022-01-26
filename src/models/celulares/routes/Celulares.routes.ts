import express from "express";

import CelularesControllers from "../controller";

export const CelularesRoutes = express.Router();

CelularesRoutes.get("/", CelularesControllers.index);
CelularesRoutes.post("/", CelularesControllers.create);
