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
import {Tipolevel1, Level1} from '../models';
import {Tipolevel1Repository} from '../repositories';

export class Tipolevel1Level1Controller {
  constructor(
    @repository(Tipolevel1Repository)
    protected tipolevel1Repository: Tipolevel1Repository,
  ) {}

  @get('/tipolevel1s/{id}/level1s', {
    responses: {
      '200': {
        description: "Array of Level1's belonging to Tipolevel1",
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
    return this.tipolevel1Repository.level1s(id).find(filter);
  }

  @post('/tipolevel1s/{id}/level1s', {
    responses: {
      '200': {
        description: 'Tipolevel1 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Level1)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Tipolevel1.prototype.idtipo1,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Level1, {
            title: 'NewLevel1InTipolevel1',
            exclude: ['ubiprov'],
            optional: ['IDTIPO1'],
          }),
        },
      },
    })
    level1: Omit<Level1, 'ubiprov'>,
  ): Promise<Level1> {
    return this.tipolevel1Repository.level1s(id).create(level1);
  }

  @patch('/tipolevel1s/{id}/level1s', {
    responses: {
      '200': {
        description: 'Tipolevel1.Level1 PATCH success count',
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
    return this.tipolevel1Repository.level1s(id).patch(level1, where);
  }

  @del('/tipolevel1s/{id}/level1s', {
    responses: {
      '200': {
        description: 'Tipolevel1.Level1 DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: String,
    @param.query.object('where', getWhereSchemaFor(Level1))
    where?: Where<Level1>,
  ): Promise<Count> {
    return this.tipolevel1Repository.level1s(id).delete(where);
  }
}
