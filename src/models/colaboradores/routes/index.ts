import express from "express";

import ColaboradoresController from "../controller/index";

const ColaboradoresRoutes = express.Router();

ColaboradoresRoutes.get("/", ColaboradoresController.index);

export default ColaboradoresRoutes;
