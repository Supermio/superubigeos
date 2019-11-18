import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {Level0, Level0Relations, Ambito, Level1, Tipolevel0} from '../models';
import {UbigeosDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {AmbitoRepository} from './ambito.repository';
import {Level1Repository} from './level1.repository';
import {Tipolevel0Repository} from './tipolevel0.repository';

export class Level0Repository extends DefaultCrudRepository<
  Level0,
  typeof Level0.prototype.ubidep,
  Level0Relations
> {

  public readonly ambito: BelongsToAccessor<Ambito, typeof Level0.prototype.ubidep>;

  public readonly level1s: HasManyRepositoryFactory<Level1, typeof Level0.prototype.ubidep>;

  public readonly tipolevel0: BelongsToAccessor<Tipolevel0, typeof Level0.prototype.ubidep>;

  constructor(
    @inject('datasources.ubigeos') dataSource: UbigeosDataSource, @repository.getter('AmbitoRepository') protected ambitoRepositoryGetter: Getter<AmbitoRepository>, @repository.getter('Level1Repository') protected level1RepositoryGetter: Getter<Level1Repository>, @repository.getter('Tipolevel0Repository') protected tipolevel0RepositoryGetter: Getter<Tipolevel0Repository>,
  ) {
    super(Level0, dataSource);
    this.tipolevel0 = this.createBelongsToAccessorFor('IDTIPO0', tipolevel0RepositoryGetter,);
    this.registerInclusionResolver('tipolevel0', this.tipolevel0.inclusionResolver);
    this.level1s = this.createHasManyRepositoryFactoryFor('level1s', level1RepositoryGetter,);
    this.registerInclusionResolver('level1s', this.level1s.inclusionResolver);
    this.ambito = this.createBelongsToAccessorFor('UBIAMBITO', ambitoRepositoryGetter,);
    this.registerInclusionResolver('ambito', this.ambito.inclusionResolver);
  }
}
