import Orphanage from '../infra/typeorm/entities/Orphanage';
import OrphanagesRepository from '../infra/typeorm/repositories/OrphanagesRepository';

class ListOrphanagesService {
  private orphanagesRepository: OrphanagesRepository;

  constructor() {
    this.orphanagesRepository = new OrphanagesRepository();
  }

  public async execute(): Promise<Orphanage[]> {
    const orphanages = await this.orphanagesRepository.findAll();

    return orphanages;
  }
}

export default ListOrphanagesService;
