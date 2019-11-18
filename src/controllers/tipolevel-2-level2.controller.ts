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
import {Tipolevel2, Level2} from '../models';
import {Tipolevel2Repository} from '../repositories';

export class Tipolevel2Level2Controller {
  constructor(
    @repository(Tipolevel2Repository)
    protected tipolevel2Repository: Tipolevel2Repository,
  ) {}

  @get('/tipolevel2s/{id}/level2s', {
    responses: {
      '200': {
        description: "Array of Level2's belonging to Tipolevel2",
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
    return this.tipolevel2Repository.level2s(id).find(filter);
  }

  @post('/tipolevel2s/{id}/level2s', {
    responses: {
      '200': {
        description: 'Tipolevel2 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Level2)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Tipolevel2.prototype.idtipo2,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Level2, {
            title: 'NewLevel2InTipolevel2',
            exclude: ['ubidist'],
            optional: ['IDTIPO2'],
          }),
        },
      },
    })
    level2: Omit<Level2, 'ubidist'>,
  ): Promise<Level2> {
    return this.tipolevel2Repository.level2s(id).create(level2);
  }

  @patch('/tipolevel2s/{id}/level2s', {
    responses: {
      '200': {
        description: 'Tipolevel2.Level2 PATCH success count',
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
    return this.tipolevel2Repository.level2s(id).patch(level2, where);
  }

  @del('/tipolevel2s/{id}/level2s', {
    responses: {
      '200': {
        description: 'Tipolevel2.Level2 DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: String,
    @param.query.object('where', getWhereSchemaFor(Level2))
    where?: Where<Level2>,
  ): Promise<Count> {
    return this.tipolevel2Repository.level2s(id).delete(where);
  }
}
