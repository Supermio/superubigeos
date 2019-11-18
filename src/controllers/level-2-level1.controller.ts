import {repository} from '@loopback/repository';
import {param, get, getModelSchemaRef} from '@loopback/rest';
import {Level2, Level1} from '../models';
import {Level2Repository} from '../repositories';

export class Level2Level1Controller {
  constructor(
    @repository(Level2Repository)
    public level2Repository: Level2Repository,
  ) {}

  @get('/level2s/{id}/level1', {
    responses: {
      '200': {
        description: 'Level1 belonging to Level2',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Level1)},
          },
        },
      },
    },
  })
  async getLevel1(
    @param.path.string('id') id: typeof Level2.prototype.ubidist,
  ): Promise<Level1> {
    return this.level2Repository.level1(id);
  }
}
