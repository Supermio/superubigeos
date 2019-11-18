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
import {Tipolevel0, Level0} from '../models';
import {Tipolevel0Repository} from '../repositories';

export class Tipolevel0Level0Controller {
  constructor(
    @repository(Tipolevel0Repository)
    protected tipolevel0Repository: Tipolevel0Repository,
  ) {}

  @get('/tipolevel0s/{id}/level0s', {
    responses: {
      '200': {
        description: "Array of Level0's belonging to Tipolevel0",
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Level0)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: String,
    @param.query.object('filter') filter?: Filter<Level0>,
  ): Promise<Level0[]> {
    return this.tipolevel0Repository.level0s(id).find(filter);
  }

  @post('/tipolevel0s/{id}/level0s', {
    responses: {
      '200': {
        description: 'Tipolevel0 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Level0)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Tipolevel0.prototype.idtipo0,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Level0, {
            title: 'NewLevel0InTipolevel0',
            exclude: ['ubidep'],
            optional: ['IDTIPO0'],
          }),
        },
      },
    })
    level0: Omit<Level0, 'ubidep'>,
  ): Promise<Level0> {
    return this.tipolevel0Repository.level0s(id).create(level0);
  }

  @patch('/tipolevel0s/{id}/level0s', {
    responses: {
      '200': {
        description: 'Tipolevel0.Level0 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: String,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Level0, {partial: true}),
        },
      },
    })
    level0: Partial<Level0>,
    @param.query.object('where', getWhereSchemaFor(Level0))
    where?: Where<Level0>,
  ): Promise<Count> {
    return this.tipolevel0Repository.level0s(id).patch(level0, where);
  }

  @del('/tipolevel0s/{id}/level0s', {
    responses: {
      '200': {
        description: 'Tipolevel0.Level0 DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: String,
    @param.query.object('where', getWhereSchemaFor(Level0))
    where?: Where<Level0>,
  ): Promise<Count> {
    return this.tipolevel0Repository.level0s(id).delete(where);
  }
}
