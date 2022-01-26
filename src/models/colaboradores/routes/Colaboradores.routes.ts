import express from "express";

import ColaboradoresController from "../controller/index";

export const ColaboradoresRoutes = express.Router();

ColaboradoresRoutes.get("/", ColaboradoresController.index);

ColaboradoresRoutes.post("/", ColaboradoresController.create);

ColaboradoresRoutes.put("/", ColaboradoresController.update);
