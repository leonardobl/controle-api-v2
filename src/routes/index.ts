import { Router } from "express";

import { CelularesRoutes } from "../models/celulares/routes/Celulares.routes";
import { ColaboradoresRoutes } from "../models/colaboradores/routes/Colaboradores.routes";
import { NotebooksRoutes } from "../models/notebooks/routers/Notebooks.routes";

export const Routes = Router();

Routes.use("/colaboradores", ColaboradoresRoutes);
Routes.use("/notebooks", NotebooksRoutes);
Routes.use("/celulares", CelularesRoutes);

export default Routes;
