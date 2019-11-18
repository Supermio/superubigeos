import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {Level1, Level2} from '../models';
import {Level1Repository} from '../repositories';

export class Level1Level2Controller {
  constructor(
    @repository(Level1Repository) protected level1Repository: Level1Repository,
  ) {}

  @get('/level1s/{id}/level2s', {
    responses: {
      '200': {
        description: "Array of Level2's belonging to Level1",
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Level2)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: String,
    @param.query.object('filter') filter?: Filter<Level2>,
  ): Promise<Level2[]> {
    return this.level1Repository.level2s(id).find(filter);
  }

  @post('/level1s/{id}/level2s', {
    responses: {
      '200': {
        description: 'Level1 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Level2)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Level1.prototype.ubiprov,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Level2, {
            title: 'NewLevel2InLevel1',
            exclude: ['ubidist'],
            optional: ['UBIPROV'],
          }),
        },
      },
    })
    level2: Omit<Level2, 'ubidist'>,
  ): Promise<Level2> {
    return this.level1Repository.level2s(id).create(level2);
  }

  @patch('/level1s/{id}/level2s', {
    responses: {
      '200': {
        description: 'Level1.Level2 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: String,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Level2, {partial: true}),
        },
      },
    })
    level2: Partial<Level2>,
    @param.query.object('where', getWhereSchemaFor(Level2))
    where?: Where<Level2>,
  ): Promise<Count> {
    return this.level1Repository.level2s(id).patch(level2, where);
  }

  @del('/level1s/{id}/level2s', {
    responses: {
      '200': {
        description: 'Level1.Level2 DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: String,
    @param.query.object('where', getWhereSchemaFor(Level2))
    where?: Where<Level2>,
  ): Promise<Count> {
    return this.level1Repository.level2s(id).delete(where);
  }
}
