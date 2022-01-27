import express from "express";

import ImeisControllers from "../controllers";

export const ImeisRoutes = express.Router();

ImeisRoutes.post("/:imei1/:imei2?", ImeisControllers.create);
