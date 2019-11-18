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
import {Level0, Level1} from '../models';
import {Level0Repository} from '../repositories';

export class Level0Level1Controller {
  constructor(
    @repository(Level0Repository) protected level0Repository: Level0Repository,
  ) {}

  @get('/level0s/{id}/level1s', {
    responses: {
      '200': {
        description: "Array of Level1's belonging to Level0",
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Level1)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: String,
    @param.query.object('filter') filter?: Filter<Level1>,
  ): Promise<Level1[]> {
    return this.level0Repository.level1s(id).find(filter);
  }

  @post('/level0s/{id}/level1s', {
    responses: {
      '200': {
        description: 'Level0 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Level1)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Level0.prototype.ubidep,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Level1, {
            title: 'NewLevel1InLevel0',
            exclude: ['ubiprov'],
            optional: ['UBIDEP'],
          }),
        },
      },
    })
    level1: Omit<Level1, 'ubiprov'>,
  ): Promise<Level1> {
    return this.level0Repository.level1s(id).create(level1);
  }

  @patch('/level0s/{id}/level1s', {
    responses: {
      '200': {
        description: 'Level0.Level1 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: String,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Level1, {partial: true}),
        },
      },
    })
    level1: Partial<Level1>,
    @param.query.object('where', getWhereSchemaFor(Level1))
    where?: Where<Level1>,
  ): Promise<Count> {
    return this.level0Repository.level1s(id).patch(level1, where);
  }

  @del('/level0s/{id}/level1s', {
    responses: {
      '200': {
        description: 'Level0.Level1 DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: String,
    @param.query.object('where', getWhereSchemaFor(Level1))
    where?: Where<Level1>,
  ): Promise<Count> {
    return this.level0Repository.level1s(id).delete(where);
  }
}
