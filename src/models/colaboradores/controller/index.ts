import { Request, Response } from "express";

import CreateColaboradoresService from "../services/CreateColaboradoresService";
import IndexColaboradoresService from "../services/IndexColaboradoresService";
import UpdateColaboradorService from "../services/UpdateColaboradorService";

interface IColaborador {
  id: string;
  identificacao?: string;
  imgName?: string;
  imgPath?: string;
  username?: string;
  password?: string;
  nome?: string;
  cargo?: string;
  celular?: string;
  notebook?: string;
}

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
    const data = {} as IColaborador;
    Object.assign(data, { ...req.body, ...req.params });
    if (req.file) {
      data.imgName = req.file.filename;
      data.imgPath = req.file.path;
    }
    const colaborador = await UpdateColaboradorService.execute(data);
    return res.status(200).json(colaborador);
  }
}

export default new ColaboradoresControllers();
