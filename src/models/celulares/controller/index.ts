import { Request, Response } from "express";

import CreateCelularService from "../services/CreateCelularService";
import IndexCelularesService from "../services/IndexCelularesService";

class CelularesControllers {
  public async index(req: Request, res: Response): Promise<Response> {
    const celulares = await IndexCelularesService.execute();
    return res.status(200).json(celulares);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const celular = await CreateCelularService.execute(req.body);
    return res.status(201).json(celular);
  }
}

export default new CelularesControllers();
