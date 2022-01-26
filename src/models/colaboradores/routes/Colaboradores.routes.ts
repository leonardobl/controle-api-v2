import express from "express";

import ColaboradoresControllers from "../controller/index";

const ColaboradoresRoutes = express.Router();

ColaboradoresRoutes.get("/", ColaboradoresControllers.index);

ColaboradoresRoutes.post("/", ColaboradoresControllers.create);

export default ColaboradoresRoutes;
