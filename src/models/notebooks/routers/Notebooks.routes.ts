import { celebrate } from "celebrate";
import express from "express";

import celebrateConfig from "../configs/celebratePostConfig";
import NotebooksController from "../controller";

const NotebooksRoutes = express.Router();

NotebooksRoutes.get("/", NotebooksController.index);

NotebooksRoutes.post(
  "/",
  celebrate(celebrateConfig),
  NotebooksController.create
);

NotebooksRoutes.put("/:id", NotebooksController.update);

export default NotebooksRoutes;
