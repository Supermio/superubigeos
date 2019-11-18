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
import {Tipolevel1} from '../models';
import {Tipolevel1Repository} from '../repositories';

export class TipoLevel1Controller {
  constructor(
    @repository(Tipolevel1Repository)
    public tipolevel1Repository : Tipolevel1Repository,
  ) {}

  @post('/tipolevel1s', {
    responses: {
      '200': {
        description: 'Tipolevel1 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tipolevel1)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipolevel1, {
            title: 'NewTipolevel1',
            
          }),
        },
      },
    })
    tipolevel1: Tipolevel1,
  ): Promise<Tipolevel1> {
    return this.tipolevel1Repository.create(tipolevel1);
  }

  @get('/tipolevel1s/count', {
    responses: {
      '200': {
        description: 'Tipolevel1 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Tipolevel1)) where?: Where<Tipolevel1>,
  ): Promise<Count> {
    return this.tipolevel1Repository.count(where);
  }

  @get('/tipolevel1s', {
    responses: {
      '200': {
        description: 'Array of Tipolevel1 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tipolevel1)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Tipolevel1)) filter?: Filter<Tipolevel1>,
  ): Promise<Tipolevel1[]> {
    return this.tipolevel1Repository.find(filter);
  }

  @patch('/tipolevel1s', {
    responses: {
      '200': {
        description: 'Tipolevel1 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipolevel1, {partial: true}),
        },
      },
    })
    tipolevel1: Tipolevel1,
    @param.query.object('where', getWhereSchemaFor(Tipolevel1)) where?: Where<Tipolevel1>,
  ): Promise<Count> {
    return this.tipolevel1Repository.updateAll(tipolevel1, where);
  }

  @get('/tipolevel1s/{id}', {
    responses: {
      '200': {
        description: 'Tipolevel1 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tipolevel1)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Tipolevel1> {
    return this.tipolevel1Repository.findById(id);
  }

  @patch('/tipolevel1s/{id}', {
    responses: {
      '204': {
        description: 'Tipolevel1 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipolevel1, {partial: true}),
        },
      },
    })
    tipolevel1: Tipolevel1,
  ): Promise<void> {
    await this.tipolevel1Repository.updateById(id, tipolevel1);
  }

  @put('/tipolevel1s/{id}', {
    responses: {
      '204': {
        description: 'Tipolevel1 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tipolevel1: Tipolevel1,
  ): Promise<void> {
    await this.tipolevel1Repository.replaceById(id, tipolevel1);
  }

  @del('/tipolevel1s/{id}', {
    responses: {
      '204': {
        description: 'Tipolevel1 DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tipolevel1Repository.deleteById(id);
  }
}
