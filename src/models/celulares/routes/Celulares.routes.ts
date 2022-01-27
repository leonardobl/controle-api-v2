import express from "express";

import CelularesControllers from "../controller";

const CelularesRoutes = express.Router();

CelularesRoutes.get("/", CelularesControllers.index);

CelularesRoutes.get("/:imei1/:imei2?", CelularesControllers.create);

CelularesRoutes.put("/", CelularesControllers.update);

export default CelularesRoutes;
