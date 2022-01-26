import express from "express";

import NotebooksController from "../controller";

export const NotebooksRoutes = express.Router();

NotebooksRoutes.post("/", NotebooksController.index);
