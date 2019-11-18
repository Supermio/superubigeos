import {
  DefaultCrudRepository,
  repository,
  HasManyRepositoryFactory,
} from '@loopback/repository';
import {Tipolevel1, Tipolevel1Relations, Level1} from '../models';
import {UbigeosDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Level1Repository} from './level1.repository';

export class Tipolevel1Repository extends DefaultCrudRepository<
  Tipolevel1,
  typeof Tipolevel1.prototype.IDTIPO1,
  Tipolevel1Relations
> {
  public readonly level1s: HasManyRepositoryFactory<
    Level1,
    typeof Tipolevel1.prototype.idtipo1
  >;

  constructor(
    @inject('datasources.ubigeos') dataSource: UbigeosDataSource,
    @repository.getter('Level1Repository')
    protected level1RepositoryGetter: Getter<Level1Repository>,
  ) {
    super(Tipolevel1, dataSource);
    this.level1s = this.createHasManyRepositoryFactoryFor(
      'level1s',
      level1RepositoryGetter,
    );
    this.registerInclusionResolver('level1s', this.level1s.inclusionResolver);
  }
}
