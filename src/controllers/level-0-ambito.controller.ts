import {repository} from '@loopback/repository';
import {param, get, getModelSchemaRef} from '@loopback/rest';
import {Level0, Ambito} from '../models';
import {Level0Repository} from '../repositories';

export class Level0AmbitoController {
  constructor(
    @repository(Level0Repository)
    public level0Repository: Level0Repository,
  ) {}

  @get('/level0s/{id}/ambito', {
    responses: {
      '200': {
        description: 'Ambito belonging to Level0',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Ambito)},
          },
        },
      },
    },
  })
  async getAmbito(
    @param.path.string('id') id: typeof Level0.prototype.ubidep,
  ): Promise<Ambito> {
    return this.level0Repository.ambito(id);
  }
}
