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
import {Tipolevel0} from '../models';
import {Tipolevel0Repository} from '../repositories';

export class TipoLevel0Controller {
  constructor(
    @repository(Tipolevel0Repository)
    public tipolevel0Repository : Tipolevel0Repository,
  ) {}

  @post('/tipolevel0s', {
    responses: {
      '200': {
        description: 'Tipolevel0 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tipolevel0)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipolevel0, {
            title: 'NewTipolevel0',
            
          }),
        },
      },
    })
    tipolevel0: Tipolevel0,
  ): Promise<Tipolevel0> {
    return this.tipolevel0Repository.create(tipolevel0);
  }

  @get('/tipolevel0s/count', {
    responses: {
      '200': {
        description: 'Tipolevel0 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Tipolevel0)) where?: Where<Tipolevel0>,
  ): Promise<Count> {
    return this.tipolevel0Repository.count(where);
  }

  @get('/tipolevel0s', {
    responses: {
      '200': {
        description: 'Array of Tipolevel0 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tipolevel0)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Tipolevel0)) filter?: Filter<Tipolevel0>,
  ): Promise<Tipolevel0[]> {
    return this.tipolevel0Repository.find(filter);
  }

  @patch('/tipolevel0s', {
    responses: {
      '200': {
        description: 'Tipolevel0 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipolevel0, {partial: true}),
        },
      },
    })
    tipolevel0: Tipolevel0,
    @param.query.object('where', getWhereSchemaFor(Tipolevel0)) where?: Where<Tipolevel0>,
  ): Promise<Count> {
    return this.tipolevel0Repository.updateAll(tipolevel0, where);
  }

  @get('/tipolevel0s/{id}', {
    responses: {
      '200': {
        description: 'Tipolevel0 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tipolevel0)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Tipolevel0> {
    return this.tipolevel0Repository.findById(id);
  }

  @patch('/tipolevel0s/{id}', {
    responses: {
      '204': {
        description: 'Tipolevel0 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipolevel0, {partial: true}),
        },
      },
    })
    tipolevel0: Tipolevel0,
  ): Promise<void> {
    await this.tipolevel0Repository.updateById(id, tipolevel0);
  }

  @put('/tipolevel0s/{id}', {
    responses: {
      '204': {
        description: 'Tipolevel0 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tipolevel0: Tipolevel0,
  ): Promise<void> {
    await this.tipolevel0Repository.replaceById(id, tipolevel0);
  }

  @del('/tipolevel0s/{id}', {
    responses: {
      '204': {
        description: 'Tipolevel0 DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tipolevel0Repository.deleteById(id);
  }
}
