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
import {Level0} from '../models';
import {Level0Repository} from '../repositories';

export class Level0Controller {
  constructor(
    @repository(Level0Repository)
    public level0Repository: Level0Repository,
  ) {}

  @post('/level0s', {
    responses: {
      '200': {
        description: 'Level0 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Level0)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Level0, {
            title: 'NewLevel0',
          }),
        },
      },
    })
    level0: Level0,
  ): Promise<Level0> {
    return this.level0Repository.create(level0);
  }

  @get('/level0s/count', {
    responses: {
      '200': {
        description: 'Level0 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Level0))
    where?: Where<Level0>,
  ): Promise<Count> {
    return this.level0Repository.count(where);
  }

  @get('/level0s', {
    responses: {
      '200': {
        description: 'Array of Level0 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Level0)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Level0))
    filter?: Filter<Level0>,
  ): Promise<Level0[]> {
    return this.level0Repository.find(filter);
  }

  @patch('/level0s', {
    responses: {
      '200': {
        description: 'Level0 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Level0, {partial: true}),
        },
      },
    })
    level0: Level0,
    @param.query.object('where', getWhereSchemaFor(Level0))
    where?: Where<Level0>,
  ): Promise<Count> {
    return this.level0Repository.updateAll(level0, where);
  }

  @get('/level0s/{id}', {
    responses: {
      '200': {
        description: 'Level0 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Level0)}},
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.query.object('filter', getFilterSchemaFor(Level0))
    filter?: Filter<Level0>,
  ): Promise<Level0> {
    return this.level0Repository.findById(id, filter);
  }

  @patch('/level0s/{id}', {
    responses: {
      '204': {
        description: 'Level0 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Level0, {partial: true}),
        },
      },
    })
    level0: Level0,
  ): Promise<void> {
    await this.level0Repository.updateById(id, level0);
  }

  @put('/level0s/{id}', {
    responses: {
      '204': {
        description: 'Level0 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() level0: Level0,
  ): Promise<void> {
    await this.level0Repository.replaceById(id, level0);
  }

  @del('/level0s/{id}', {
    responses: {
      '204': {
        description: 'Level0 DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.level0Repository.deleteById(id);
  }
}
