import { Request, Response } from 'express';

import CreateOrphanage from '../../../services/CreateOrphanage';
import ListOrphanagesService from '../../../services/ListOrphanagesService';
import ShowOrphanageService from '../../../services/ShowOrphanageService';

class OrphanagesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listOrphanages = new ListOrphanagesService();

    const orphanages = await listOrphanages.execute();

    return response.status(200).json(orphanages);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const createOrphanage = new CreateOrphanage();

    const orphanage = await createOrphanage.execute({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    });

    return response.status(201).json(orphanage);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id);

    const showOrphanage = new ShowOrphanageService();

    const orphanage = await showOrphanage.execute({ id });

    return response.status(200).json(orphanage);
  }
}

export default OrphanagesController;
