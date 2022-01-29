import { Request, Response } from "express";

import LoginService from "../services/LoginService";

interface ILogin {
  username: string;
  password: string;
}
class LoginController {
  public async create(req: Request, res: Response): Promise<Response> {
    const data = {} as ILogin;
    Object.assign(data, req.body);

    const login = await LoginService.execute(data);
    return res.status(200).json(login);
  }
}

export default new LoginController();
