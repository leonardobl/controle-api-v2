import { Request, Response } from "express";

import IndexColaboradoresService from "../services/IndexColaboradoresService";

class ColaboradoresController {
  async index(req: Request, res: Response): Promise<Response> {
    const colaboradores = await IndexColaboradoresService.execute();
    return res.json(colaboradores);
  }
}

export default new ColaboradoresController();
