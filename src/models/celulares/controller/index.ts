import { Request, Response } from "express";

class CelularesControllers {
  public async index(req: Request, res: Response): Promise<Response> {
    const celulares = await IndexCelularesService.execute();
    return res.status(200).json(celulares);
  }
}

export default new CelularesControllers();
