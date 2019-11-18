import {
  DefaultCrudRepository,
  repository,
  HasManyRepositoryFactory,
} from '@loopback/repository';
import {Ambito, AmbitoRelations, Level0} from '../models';
import {UbigeosDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Level0Repository} from './level0.repository';

export class AmbitoRepository extends DefaultCrudRepository<
  Ambito,
  typeof Ambito.prototype.UBIAMBITO,
  AmbitoRelations
> {
  public readonly level0s: HasManyRepositoryFactory<
    Level0,
    typeof Ambito.prototype.ubiambito
  >;

  constructor(
    @inject('datasources.ubigeos') dataSource: UbigeosDataSource,
    @repository.getter('Level0Repository')
    protected level0RepositoryGetter: Getter<Level0Repository>,
  ) {
    super(Ambito, dataSource);
    this.level0s = this.createHasManyRepositoryFactoryFor(
      'level0s',
      level0RepositoryGetter,
    );
    this.registerInclusionResolver('level0s', this.level0s.inclusionResolver);
  }
}
