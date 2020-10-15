import { Request, Response } from 'express';
import * as Yup from 'yup';

import CreateOrphanage from '../../../services/CreateOrphanage';
import ListOrphanagesService from '../../../services/ListOrphanagesService';
import ShowOrphanageService from '../../../services/ShowOrphanageService';

import orphanagesView from '../../../views/orphanages.view';

class OrphanagesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listOrphanages = new ListOrphanagesService();

    const orphanages = await listOrphanages.execute();

    return response.status(200).json(orphanagesView.renderMany(orphanages));
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
    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return { path: image.filename };
    });

    const createOrphanage = new CreateOrphanage();

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        }),
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const orphanage = await createOrphanage.execute(data);

    return response.status(201).json(orphanage);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id);

    const showOrphanage = new ShowOrphanageService();

    const orphanage = await showOrphanage.execute({ id });

    return response.status(200).json(orphanagesView.render(orphanage));
  }
}

export default OrphanagesController;
