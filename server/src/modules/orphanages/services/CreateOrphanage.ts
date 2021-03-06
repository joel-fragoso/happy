import Orphanage from '../infra/typeorm/entities/Orphanage';
import OrphanagesRepository from '../infra/typeorm/repositories/OrphanagesRepository';

interface IRequestImage {
  path: string;
}

interface IRequest {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: IRequestImage[];
}

class CreateOrphanage {
  private orphanagesRepository: OrphanagesRepository;

  constructor() {
    this.orphanagesRepository = new OrphanagesRepository();
  }

  public async execute({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
    images,
  }: IRequest): Promise<Orphanage> {
    const orphanage = await this.orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    });

    return orphanage;
  }
}

export default CreateOrphanage;
