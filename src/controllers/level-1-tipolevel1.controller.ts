import {repository} from '@loopback/repository';
import {param, get, getModelSchemaRef} from '@loopback/rest';
import {Level1, Tipolevel1} from '../models';
import {Level1Repository} from '../repositories';

export class Level1Tipolevel1Controller {
  constructor(
    @repository(Level1Repository)
    public level1Repository: Level1Repository,
  ) {}

  @get('/level1s/{id}/tipolevel1', {
    responses: {
      '200': {
        description: 'Tipolevel1 belonging to Level1',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tipolevel1)},
          },
        },
      },
    },
  })
  async getTipolevel1(
    @param.path.string('id') id: typeof Level1.prototype.ubiprov,
  ): Promise<Tipolevel1> {
    return this.level1Repository.tipolevel1(id);
  }
}
