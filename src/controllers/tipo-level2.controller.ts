import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Tipolevel2} from '../models';
import {Tipolevel2Repository} from '../repositories';

export class TipoLevel2Controller {
  constructor(
    @repository(Tipolevel2Repository)
    public tipolevel2Repository: Tipolevel2Repository,
  ) {}

  @post('/tipolevel2s', {
    responses: {
      '200': {
        description: 'Tipolevel2 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tipolevel2)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipolevel2, {
            title: 'NewTipolevel2',
          }),
        },
      },
    })
    tipolevel2: Tipolevel2,
  ): Promise<Tipolevel2> {
    return this.tipolevel2Repository.create(tipolevel2);
  }

  @get('/tipolevel2s/count', {
    responses: {
      '200': {
        description: 'Tipolevel2 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Tipolevel2))
    where?: Where<Tipolevel2>,
  ): Promise<Count> {
    return this.tipolevel2Repository.count(where);
  }

  @get('/tipolevel2s', {
    responses: {
      '200': {
        description: 'Array of Tipolevel2 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tipolevel2)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Tipolevel2))
    filter?: Filter<Tipolevel2>,
  ): Promise<Tipolevel2[]> {
    return this.tipolevel2Repository.find(filter);
  }

  @patch('/tipolevel2s', {
    responses: {
      '200': {
        description: 'Tipolevel2 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipolevel2, {partial: true}),
        },
      },
    })
    tipolevel2: Tipolevel2,
    @param.query.object('where', getWhereSchemaFor(Tipolevel2))
    where?: Where<Tipolevel2>,
  ): Promise<Count> {
    return this.tipolevel2Repository.updateAll(tipolevel2, where);
  }

  @get('/tipolevel2s/{id}', {
    responses: {
      '200': {
        description: 'Tipolevel2 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tipolevel2)}},
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.query.object('filter', getFilterSchemaFor(Tipolevel2))
    filter?: Filter<Tipolevel2>,
  ): Promise<Tipolevel2> {
    return this.tipolevel2Repository.findById(id, filter);
  }

  @patch('/tipolevel2s/{id}', {
    responses: {
      '204': {
        description: 'Tipolevel2 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipolevel2, {partial: true}),
        },
      },
    })
    tipolevel2: Tipolevel2,
  ): Promise<void> {
    await this.tipolevel2Repository.updateById(id, tipolevel2);
  }

  @put('/tipolevel2s/{id}', {
    responses: {
      '204': {
        description: 'Tipolevel2 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tipolevel2: Tipolevel2,
  ): Promise<void> {
    await this.tipolevel2Repository.replaceById(id, tipolevel2);
  }

  @del('/tipolevel2s/{id}', {
    responses: {
      '204': {
        description: 'Tipolevel2 DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tipolevel2Repository.deleteById(id);
  }
}
