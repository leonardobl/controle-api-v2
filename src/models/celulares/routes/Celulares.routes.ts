import { celebrate } from "celebrate";
import express from "express";

import celebrateConfig from "../configs/celebrateConfig";
import CelularesControllers from "../controller";

export const CelularesRoutes = express.Router();

CelularesRoutes.get("/", CelularesControllers.index);

CelularesRoutes.post(
  "/",
  celebrate(celebrateConfig),
  CelularesControllers.create
);
