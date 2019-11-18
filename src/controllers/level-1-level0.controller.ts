import {repository} from '@loopback/repository';
import {param, get, getModelSchemaRef} from '@loopback/rest';
import {Level1, Level0} from '../models';
import {Level1Repository} from '../repositories';

export class Level1Level0Controller {
  constructor(
    @repository(Level1Repository)
    public level1Repository: Level1Repository,
  ) {}

  @get('/level1s/{id}/level0', {
    responses: {
      '200': {
        description: 'Level0 belonging to Level1',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Level0)},
          },
        },
      },
    },
  })
  async getLevel0(
    @param.path.string('id') id: typeof Level1.prototype.ubiprov,
  ): Promise<Level0> {
    return this.level1Repository.level0(id);
  }
}
