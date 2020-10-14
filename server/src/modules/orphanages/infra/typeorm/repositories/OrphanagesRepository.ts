import { getRepository, Repository } from 'typeorm';

import ICreateOrphanageDTO from '../../../dtos/ICreateOrphanageDTO';
import IOrphanagesRepository from '../../../repositories/IOrphanagesRepository';
import Orphanage from '../entities/Orphanage';

class OrphanagesRepository implements IOrphanagesRepository {
  private ormRepository: Repository<Orphanage>;

  constructor() {
    this.ormRepository = getRepository(Orphanage);
  }

  public async findById(id: number): Promise<Orphanage | undefined> {
    const orphanage = await this.ormRepository.findOne(id);

    return orphanage;
  }

  public async findByName(name: string): Promise<Orphanage | undefined> {
    const orphanage = await this.ormRepository.findOne({ where: { name } });

    return orphanage;
  }

  public async create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  }: ICreateOrphanageDTO): Promise<Orphanage> {
    const createOrphanage = this.ormRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    });

    const orphanage = await this.ormRepository.save(createOrphanage);

    return orphanage;
  }

  public async update(orphanage: Orphanage): Promise<Orphanage> {
    const updatedOrphanage = await this.ormRepository.save(orphanage);

    return updatedOrphanage;
  }
}

export default OrphanagesRepository;
