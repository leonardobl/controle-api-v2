import { Request, Response } from "express";

import CreateColaboradoresService from "../services/CreateColaboradoresService";
import DeleteColaboradorService from "../services/DeleteColaboradorService";
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

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await DeleteColaboradorService.execute(id);
    return res.status(200).json([]);
  }

  public async findForNameOrIdentity(
    req: Request,
    res: Response
  ): Promise<Response> {
    const data = req.params.data.trim();
    const colaborador = await FindForNameOrIdentity.execute(data);
    return res.status(200).json(colaborador);
  }
}

export default new ColaboradoresControllers();
