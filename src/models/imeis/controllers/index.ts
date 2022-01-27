import { Request, Response } from "express";

import CreateImeisService from "../services/CreateImeisService";
import DeleteImeisService from "../services/DeleteImeisService";
import IndexImeisService from "../services/IndexImeisService";
import UpdateImeiService from "../services/UpdateImeiService";

interface IImei {
  imei1: string;
  imei2?: string;
}
class ImeisControllers {
  public async create(req: Request, res: Response): Promise<Response> {
    const data = {} as IImei;
    Object.assign(data, req.body);
    const imei = await CreateImeisService.execute(data);
    return res.status(201).json(imei);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const imeis = await IndexImeisService.execute();
    return res.status(200).json(imeis);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const imeiUpdated = await UpdateImeiService.execute(req);
    return res.status(200).json(imeiUpdated);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await DeleteImeisService.execute(id);
    return res.status(200).json([]);
  }
}

export default new ImeisControllers();
