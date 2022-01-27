import express from "express";

import ImeisControllers from "../controllers";

const ImeisRoutes = express.Router();

ImeisRoutes.post("/:imei1/:imei2?", ImeisControllers.create);

ImeisRoutes.get("/", ImeisControllers.index);

ImeisRoutes.put("/", ImeisControllers.update);

export default ImeisRoutes;
