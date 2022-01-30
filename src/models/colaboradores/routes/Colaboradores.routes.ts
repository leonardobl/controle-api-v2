import { celebrate } from "celebrate";
import express from "express";

import isAuthenticated from "../../../shared/middlewares/isAuthenticated";
import multerMiddleware from "../../../shared/middlewares/multerConfig";
import celebrateCreateConfig from "../configs/celebrateCreateConfig";
import ColaboradoresController from "../controller/index";

const ColaboradoresRoutes = express.Router();

ColaboradoresRoutes.get("/", ColaboradoresController.index);

ColaboradoresRoutes.post(
  "/",
  isAuthenticated,
  celebrate(celebrateCreateConfig),
  ColaboradoresController.create
);

ColaboradoresRoutes.put(
  "/:id",
  multerMiddleware.single("file"),
  ColaboradoresController.update
);

ColaboradoresRoutes.get(
  "/:data",
  ColaboradoresController.findForNameOrIdentity
);

ColaboradoresRoutes.delete("/:id", ColaboradoresController.delete);

export default ColaboradoresRoutes;
