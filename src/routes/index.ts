import { Router } from "express";

<<<<<<< HEAD
import ColaboradoresRoutes from "../models/colaboradores/routes/Colaboradores.routes";
=======
import { ColaboradoresRoutes } from "../models/colaboradores/routes/Colaboradores.routes";
import { NotebooksRoutes } from "../models/notebooks/routers/Notebooks.routes";
>>>>>>> master

export const Routes = Router();

Routes.use("/colaboradores", ColaboradoresRoutes);
Routes.use("/notebooks", NotebooksRoutes);

export default Routes;
