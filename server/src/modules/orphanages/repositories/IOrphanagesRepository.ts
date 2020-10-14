import ICreateOrphanageDTO from '../dtos/ICreateOrphanageDTO';
import Orphanage from '../infra/typeorm/entities/Orphanage';

interface IOrphanagesRepository {
  findAll(): Promise<Orphanage[]>;

  findById(id: number): Promise<Orphanage>;

  findByName(name: string): Promise<Orphanage | undefined>;

  create(data: ICreateOrphanageDTO): Promise<Orphanage>;

  update(orphanage: Orphanage): Promise<Orphanage>;
}

export default IOrphanagesRepository;
