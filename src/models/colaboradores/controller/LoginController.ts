import { Request, Response } from "express";

class LoginController {
  public async create(req: Request, res: Response): Promise<Response> {
    return res.json([]);
  }
}

export default new LoginController();
