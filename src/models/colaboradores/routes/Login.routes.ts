import { Router } from "express";

import LoginController from "../controller/LoginController";

const LoginRoutes = Router();

LoginRoutes.post("/", LoginController.create);

export default LoginRoutes;
