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
import {Level1} from '../models';
import {Level1Repository} from '../repositories';

export class Level1Controller {
  constructor(
    @repository(Level1Repository)
    public level1Repository: Level1Repository,
  ) {}

  @post('/level1s', {
    responses: {
      '200': {
        description: 'Level1 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Level1)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Level1, {
            title: 'NewLevel1',
          }),
        },
      },
    })
    level1: Level1,
  ): Promise<Level1> {
    return this.level1Repository.create(level1);
  }

  @get('/level1s/count', {
    responses: {
      '200': {
        description: 'Level1 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Level1))
    where?: Where<Level1>,
  ): Promise<Count> {
    return this.level1Repository.count(where);
  }

  @get('/level1s', {
    responses: {
      '200': {
        description: 'Array of Level1 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Level1)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Level1))
    filter?: Filter<Level1>,
  ): Promise<Level1[]> {
    return this.level1Repository.find(filter);
  }

  @patch('/level1s', {
    responses: {
      '200': {
        description: 'Level1 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Level1, {partial: true}),
        },
      },
    })
    level1: Level1,
    @param.query.object('where', getWhereSchemaFor(Level1))
    where?: Where<Level1>,
  ): Promise<Count> {
    return this.level1Repository.updateAll(level1, where);
  }

  @get('/level1s/{id}', {
    responses: {
      '200': {
        description: 'Level1 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Level1)}},
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.query.object('filter', getFilterSchemaFor(Level1))
    filter?: Filter<Level1>,
  ): Promise<Level1> {
    return this.level1Repository.findById(id, filter);
  }

  @patch('/level1s/{id}', {
    responses: {
      '204': {
        description: 'Level1 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Level1, {partial: true}),
        },
      },
    })
    level1: Level1,
  ): Promise<void> {
    await this.level1Repository.updateById(id, level1);
  }

  @put('/level1s/{id}', {
    responses: {
      '204': {
        description: 'Level1 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() level1: Level1,
  ): Promise<void> {
    await this.level1Repository.replaceById(id, level1);
  }

  @del('/level1s/{id}', {
    responses: {
      '204': {
        description: 'Level1 DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.level1Repository.deleteById(id);
  }
}
