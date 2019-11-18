import {repository} from '@loopback/repository';
import {param, get, getModelSchemaRef} from '@loopback/rest';
import {Level0, Tipolevel0} from '../models';
import {Level0Repository} from '../repositories';

export class Level0Tipolevel0Controller {
  constructor(
    @repository(Level0Repository)
    public level0Repository: Level0Repository,
  ) {}

  @get('/level0s/{id}/tipolevel0', {
    responses: {
      '200': {
        description: 'Tipolevel0 belonging to Level0',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tipolevel0)},
          },
        },
      },
    },
  })
  async getTipolevel0(
    @param.path.string('id') id: typeof Level0.prototype.ubidep,
  ): Promise<Tipolevel0> {
    return this.level0Repository.tipolevel0(id);
  }
}
