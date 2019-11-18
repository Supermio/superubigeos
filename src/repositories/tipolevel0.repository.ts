import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Tipolevel0, Tipolevel0Relations, Level0} from '../models';
import {UbigeosDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Level0Repository} from './level0.repository';

export class Tipolevel0Repository extends DefaultCrudRepository<
  Tipolevel0,
  typeof Tipolevel0.prototype.idtipo0,
  Tipolevel0Relations
> {

  public readonly level0s: HasManyRepositoryFactory<Level0, typeof Tipolevel0.prototype.idtipo0>;

  constructor(@inject('datasources.ubigeos') dataSource: UbigeosDataSource, @repository.getter('Level0Repository') protected level0RepositoryGetter: Getter<Level0Repository>,) {
    super(Tipolevel0, dataSource);
    this.level0s = this.createHasManyRepositoryFactoryFor('level0s', level0RepositoryGetter,);
    this.registerInclusionResolver('level0s', this.level0s.inclusionResolver);
  }
}
