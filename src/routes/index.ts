import { Router } from "express";

import { ColaboradoresRoutes } from "../models/colaboradores/routes/Colaboradores.routes";
import { NotebooksRoutes } from "../models/notebooks/routers/Notebooks.routes";

export const Routes = Router();

Routes.use("/colaboradores", ColaboradoresRoutes);
Routes.use("/notebooks", NotebooksRoutes);

export default Routes;
