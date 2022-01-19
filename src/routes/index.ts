import { Router } from "express";
import SwaggerUI from "swagger-ui-express";

import swaggerDocument from "../../swagger.json";
import ColaboradoresRoutes from "../models/colaboradores/routes";

export const Routes = Router();

Routes.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));
Routes.use("/colaboradores", ColaboradoresRoutes);

export default Routes;
