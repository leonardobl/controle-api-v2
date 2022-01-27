import { celebrate } from "celebrate";
import express from "express";

import celebrateCreateConfig from "../configs/celebrateCreateConfig";
import CelularesControllers from "../controller";

export const CelularesRoutes = express.Router();

CelularesRoutes.get("/", CelularesControllers.index);

CelularesRoutes.post(
  "/:imei1/imei2?",
  celebrate(celebrateCreateConfig),
  CelularesControllers.create
);
