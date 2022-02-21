import express from "express";

import multerMiddleware from "../../../shared/middlewares/multerConfig";
import CelularesControllers from "../controller";

const CelularesRoutes = express.Router();

CelularesRoutes.get("/", CelularesControllers.index);

CelularesRoutes.post("/", CelularesControllers.create);

CelularesRoutes.put(
  "/",
  multerMiddleware.single("file"),
  CelularesControllers.update
);

CelularesRoutes.delete("/:id", CelularesControllers.delete);

export default CelularesRoutes;
