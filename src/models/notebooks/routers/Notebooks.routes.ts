import express from "express";

import NotebooksController from "../controller";

const NotebooksRoutes = express.Router();

NotebooksRoutes.get("/", NotebooksController.index);
NotebooksRoutes.post("/", NotebooksController.create);

export default NotebooksRoutes;
