import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Level2, Level2Relations, Tipolevel2, Level1} from '../models';
import {UbigeosDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Tipolevel2Repository} from './tipolevel2.repository';
import {Level1Repository} from './level1.repository';

export class Level2Repository extends DefaultCrudRepository<
  Level2,
  typeof Level2.prototype.UBIDIST,
  Level2Relations
> {

  public readonly tipolevel2: BelongsToAccessor<Tipolevel2, typeof Level2.prototype.ubidist>;

  public readonly level1: BelongsToAccessor<Level1, typeof Level2.prototype.ubidist>;

  constructor(
    @inject('datasources.ubigeos') dataSource: UbigeosDataSource, @repository.getter('Tipolevel2Repository') protected tipolevel2RepositoryGetter: Getter<Tipolevel2Repository>, @repository.getter('Level1Repository') protected level1RepositoryGetter: Getter<Level1Repository>,
  ) {
    super(Level2, dataSource);
    this.level1 = this.createBelongsToAccessorFor('UBIPROV', level1RepositoryGetter,);
    this.registerInclusionResolver('level1', this.level1.inclusionResolver);
    this.tipolevel2 = this.createBelongsToAccessorFor('IDTIPO2', tipolevel2RepositoryGetter,);
    this.registerInclusionResolver('tipolevel2', this.tipolevel2.inclusionResolver);
  }
}
