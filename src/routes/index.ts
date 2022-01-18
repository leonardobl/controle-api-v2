import { Router } from "express";

import ColaboradoresRoutes from "../models/colaboradores/routes";

export const Routes = Router();

Routes.use("/colaboradores", ColaboradoresRoutes);

export default Routes;
