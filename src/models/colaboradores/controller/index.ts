import { Request, Response } from "express";

import CreateColaboradoresService from "../services/CreateColaboradoresService";
import IndexColaboradoresService from "../services/IndexColaboradoresService";

class ColaboradoresControllers {
  async index(req: Request, res: Response): Promise<Response> {
    const colaboradores = await IndexColaboradoresService.execute();
    return res.json(colaboradores);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const colaborador = await CreateColaboradoresService.execute({
      ...req.body,
    });
    return res.status(201).json(colaborador);
  }
}

export default new ColaboradoresControllers();
