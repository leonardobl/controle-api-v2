import { celebrate } from "celebrate";
import express from "express";

import celebrateCreateConfig from "../configs/celebrateCreateConfig";
import ColaboradoresController from "../controller/index";

const ColaboradoresRoutes = express.Router();

ColaboradoresRoutes.get("/", ColaboradoresController.index);

ColaboradoresRoutes.post(
  "/",
  celebrate(celebrateCreateConfig),
  ColaboradoresController.create
);

ColaboradoresRoutes.put("/:id", ColaboradoresController.update);

export default ColaboradoresRoutes;
