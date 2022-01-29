import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";

import LoginController from "../controller/LoginController";

const LoginRoutes = Router();

LoginRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      username: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  LoginController.create
);

export default LoginRoutes;
