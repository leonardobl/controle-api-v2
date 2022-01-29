import { celebrate } from "celebrate";
import express from "express";

import multerMiddleware from "../../../shared/middlewares/multerConfig";
import celebrateDeleteConfig from "../configs/celbrateDeleteConfig";
import celebratePostConfig from "../configs/celebratePostConfig";
import NotebooksController from "../controller";

const NotebooksRoutes = express.Router();

NotebooksRoutes.get("/", NotebooksController.index);

NotebooksRoutes.post(
  "/",
  celebrate(celebratePostConfig),
  NotebooksController.create
);

NotebooksRoutes.put(
  "/:id",
  multerMiddleware.single("file"),
  NotebooksController.update
);

NotebooksRoutes.delete(
  "/:id",
  celebrate(celebrateDeleteConfig),
  NotebooksController.delete
);

export default NotebooksRoutes;
