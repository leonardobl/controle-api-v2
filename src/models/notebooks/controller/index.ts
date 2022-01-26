import { Request, Response } from "express";

import CreateNotebookService from "../services/CreateNotebookService";
import IndexNotebookService from "../services/IndexNotebooksService";

class NotebooksControllers {
  public async create(req: Request, res: Response): Promise<Response> {
    const notebook = await CreateNotebookService.Execute(req.body);
    return res.status(201).json(notebook);
  }

  public async index(req: Request, res: Response) {
    const notebooks = await IndexNotebookService.execute();
    return res.status(200).json(notebooks);
  }
}

export default new NotebooksControllers();
