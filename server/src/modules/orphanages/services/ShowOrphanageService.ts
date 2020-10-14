import AppError from '../../../shared/errors/AppError';
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

  public async execute({ id }: IRequest): Promise<Orphanage> {
    const orphanage = await this.orphanagesRepository.findById(id);

    if (!orphanage) {
      throw new AppError(`The orphanage id (${id}) does not exist.`);
    }

    return orphanage;
  }
}

export default ShowOrphanageService;
