import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {Level1, Level1Relations, Tipolevel1, Level0, Level2} from '../models';
import {UbigeosDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Tipolevel1Repository} from './tipolevel1.repository';
import {Level0Repository} from './level0.repository';
import {Level2Repository} from './level2.repository';

export class Level1Repository extends DefaultCrudRepository<
  Level1,
  typeof Level1.prototype.UBIPROV,
  Level1Relations
> {

  public readonly tipolevel1: BelongsToAccessor<Tipolevel1, typeof Level1.prototype.ubiprov>;

  public readonly level0: BelongsToAccessor<Level0, typeof Level1.prototype.ubiprov>;

  public readonly level2s: HasManyRepositoryFactory<Level2, typeof Level1.prototype.ubiprov>;

  constructor(
    @inject('datasources.ubigeos') dataSource: UbigeosDataSource, @repository.getter('Tipolevel1Repository') protected tipolevel1RepositoryGetter: Getter<Tipolevel1Repository>, @repository.getter('Level0Repository') protected level0RepositoryGetter: Getter<Level0Repository>, @repository.getter('Level2Repository') protected level2RepositoryGetter: Getter<Level2Repository>,
  ) {
    super(Level1, dataSource);
    this.level2s = this.createHasManyRepositoryFactoryFor('level2s', level2RepositoryGetter,);
    this.registerInclusionResolver('level2s', this.level2s.inclusionResolver);
    this.level0 = this.createBelongsToAccessorFor('UBIDEP', level0RepositoryGetter,);
    this.registerInclusionResolver('level0', this.level0.inclusionResolver);
    this.tipolevel1 = this.createBelongsToAccessorFor('IDTIPO1', tipolevel1RepositoryGetter,);
    this.registerInclusionResolver('tipolevel1', this.tipolevel1.inclusionResolver);
  }
}
