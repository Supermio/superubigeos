import {repository} from '@loopback/repository';
import {param, get, getModelSchemaRef} from '@loopback/rest';
import {Level2, Tipolevel2} from '../models';
import {Level2Repository} from '../repositories';

export class Level2Tipolevel2Controller {
  constructor(
    @repository(Level2Repository)
    public level2Repository: Level2Repository,
  ) {}

  @get('/level2s/{id}/tipolevel2', {
    responses: {
      '200': {
        description: 'Tipolevel2 belonging to Level2',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tipolevel2)},
          },
        },
      },
    },
  })
  async getTipolevel2(
    @param.path.string('id') id: typeof Level2.prototype.ubidist,
  ): Promise<Tipolevel2> {
    return this.level2Repository.tipolevel2(id);
  }
}
