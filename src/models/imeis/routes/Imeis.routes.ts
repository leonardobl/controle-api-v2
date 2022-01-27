import { celebrate, Joi, Segments } from "celebrate";
import express from "express";

import ImeisControllers from "../controllers";

const ImeisRoutes = express.Router();

ImeisRoutes.post(
  "/",
  celebrate({
    [Segments.PARAMS]: {
      imei1: Joi.string().required(),
      imei2: Joi.string(),
    },
  }),
  ImeisControllers.create
);

ImeisRoutes.get("/", ImeisControllers.index);

ImeisRoutes.put("/:id", ImeisControllers.update);

ImeisRoutes.delete("/:id", ImeisControllers.delete);

export default ImeisRoutes;
