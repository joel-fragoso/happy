import Orphanage from '../infra/typeorm/entities/Orphanage';
import OrphanagesRepository from '../infra/typeorm/repositories/OrphanagesRepository';

interface IRequest {
  id: number;
}

class ShowOrphanageService {
  private orphanagesRepository: OrphanagesRepository;

  constructor() {
    this.orphanagesRepository = new OrphanagesRepository();
  }

  public async execute({ id }: IRequest): Promise<Orphanage | undefined> {
    const orphanage = await this.orphanagesRepository.findById(id);

    return orphanage;
  }
}

export default ShowOrphanageService;
