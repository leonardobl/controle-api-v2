import express from "express";

import NotebooksController from "../controller";

export const NotebooksRoutes = express.Router();

NotebooksRoutes.get("/", NotebooksController.index);
NotebooksRoutes.post("/", NotebooksController.create);
