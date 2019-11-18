import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Tipolevel2, Tipolevel2Relations, Level2} from '../models';
import {UbigeosDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Level2Repository} from './level2.repository';

export class Tipolevel2Repository extends DefaultCrudRepository<
  Tipolevel2,
  typeof Tipolevel2.prototype.IDTIPO2,
  Tipolevel2Relations
> {

  public readonly level2s: HasManyRepositoryFactory<Level2, typeof Tipolevel2.prototype.idtipo2>;

  constructor(
    @inject('datasources.ubigeos') dataSource: UbigeosDataSource, @repository.getter('Level2Repository') protected level2RepositoryGetter: Getter<Level2Repository>,
  ) {
    super(Tipolevel2, dataSource);
    this.level2s = this.createHasManyRepositoryFactoryFor('level2s', level2RepositoryGetter,);
    this.registerInclusionResolver('level2s', this.level2s.inclusionResolver);
  }
}
