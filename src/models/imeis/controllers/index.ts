import { Request, Response } from "express";

import CreateImeisService from "../services/CreateImeisService";
import IndexImeisService from "../services/IndexImeisService";

class ImeisControllers {
  public async create(req: Request, res: Response): Promise<Response> {
    const imei = await CreateImeisService.execute(req);
    return res.status(201).json(imei);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const imeis = await IndexImeisService.execute();
    return res.status(200).json(imeis);
  }
}

export default new ImeisControllers();
