import { Request, Response } from "express";

import CreateCelularService from "../services/CreateCelularService";
import DeleteCelularService from "../services/DeleteCelularService";
import IndexCelularesService from "../services/IndexCelularesService";
import UpdateCelularService from "../services/UpdateCelularService";

interface ICelular {
  id: string;
  marca?: string;
  molelo?: string;
  imgName?: string;
  imgPath?: string;
  imei1: string;
  imei2?: string;
}

class CelularesControllers {
  public async index(req: Request, res: Response): Promise<Response> {
    const celulares = await IndexCelularesService.execute();
    return res.status(200).json(celulares);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const celular = await CreateCelularService.execute(req);
    return res.status(201).json(celular);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    let data = {} as ICelular;
    data = { ...req.body };

    if (req.file) {
      data.imgName = req.file.filename;
      data.imgPath = req.file.path;
    }

    const celularUpdated = await UpdateCelularService.execute(data);
    return res.status(200).json(celularUpdated);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    await DeleteCelularService.execute(req.params.id);
    return res.status(200).json([]);
  }
}

export default new CelularesControllers();
