import { Request, Response } from "express";

import CreateNotebookService from "../services/CreateNotebookService";
import IndexNotebookService from "../services/IndexNotebooksService";

interface INotebook {
  id: string;
  marca?: string;
  modelo?: string;
  imgPath?: string;
  imgName?: string;
  numeroSerie?: string;
  numeroPatrimonio?: string;
}

class NotebooksControllers {
  public async create(req: Request, res: Response): Promise<Response> {
    const notebook = await CreateNotebookService.Execute(req.body);
    return res.status(201).json(notebook);
  }

  public async index(req: Request, res: Response) {
    const notebooks = await IndexNotebookService.execute();
    return res.status(200).json(notebooks);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const data = {} as INotebook;
    Object.assign(data, { ...req.params, ...req.body, req?.file });

    const notebookUpdated = await UpdateNotebookService(data);
    return res.status(201).json(notebookUpdated);
  }
}

export default new NotebooksControllers();
