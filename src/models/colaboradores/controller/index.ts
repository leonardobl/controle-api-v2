import { Request, Response } from "express";

import CreateColaboradoresService from "../services/CreateColaboradoresService";
import IndexColaboradoresService from "../services/IndexColaboradoresService";
import UpdateColaboradorService from "../services/UpdateColaboradorService";

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

  async update(req: Request, res: Response): Promise<Response> {
    const colaborador = await UpdateColaboradorService.execute(req);
    return res.status(200).json(colaborador);
  }
}

export default new ColaboradoresControllers();
