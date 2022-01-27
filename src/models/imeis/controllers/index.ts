import { Request, Response } from "express";

import CreateImeisService from "../services/CreateImeisService";

class ImeisControllers {
  public async create(req: Request, res: Response): Promise<Response> {
    const imei = await CreateImeisService.execute(req);
  }
}
