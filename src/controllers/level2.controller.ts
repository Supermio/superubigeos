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
import {Level2} from '../models';
import {Level2Repository} from '../repositories';

export class Level2Controller {
  constructor(
    @repository(Level2Repository)
    public level2Repository : Level2Repository,
  ) {}

  @post('/level2s', {
    responses: {
      '200': {
        description: 'Level2 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Level2)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Level2, {
            title: 'NewLevel2',
            
          }),
        },
      },
    })
    level2: Level2,
  ): Promise<Level2> {
    return this.level2Repository.create(level2);
  }

  @get('/level2s/count', {
    responses: {
      '200': {
        description: 'Level2 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Level2)) where?: Where<Level2>,
  ): Promise<Count> {
    return this.level2Repository.count(where);
  }

  @get('/level2s', {
    responses: {
      '200': {
        description: 'Array of Level2 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Level2)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Level2)) filter?: Filter<Level2>,
  ): Promise<Level2[]> {
    return this.level2Repository.find(filter);
  }

  @patch('/level2s', {
    responses: {
      '200': {
        description: 'Level2 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Level2, {partial: true}),
        },
      },
    })
    level2: Level2,
    @param.query.object('where', getWhereSchemaFor(Level2)) where?: Where<Level2>,
  ): Promise<Count> {
    return this.level2Repository.updateAll(level2, where);
  }

  @get('/level2s/{id}', {
    responses: {
      '200': {
        description: 'Level2 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Level2)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Level2> {
    return this.level2Repository.findById(id);
  }

  @patch('/level2s/{id}', {
    responses: {
      '204': {
        description: 'Level2 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Level2, {partial: true}),
        },
      },
    })
    level2: Level2,
  ): Promise<void> {
    await this.level2Repository.updateById(id, level2);
  }

  @put('/level2s/{id}', {
    responses: {
      '204': {
        description: 'Level2 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() level2: Level2,
  ): Promise<void> {
    await this.level2Repository.replaceById(id, level2);
  }

  @del('/level2s/{id}', {
    responses: {
      '204': {
        description: 'Level2 DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.level2Repository.deleteById(id);
  }
}
