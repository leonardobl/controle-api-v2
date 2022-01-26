import { Request, Response } from "express";

import CreateNotebookService from "../services/CreateNotebookService";

class NotebooksControllers {
  public async index(req: Request, res: Response): Promise<Response> {
    const notebook = await CreateNotebookService.Execute(req.body);
    return res.status(201).json(notebook);
  }
}

export default new NotebooksControllers();
