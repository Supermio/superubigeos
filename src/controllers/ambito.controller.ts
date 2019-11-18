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
import {Ambito} from '../models';
import {AmbitoRepository} from '../repositories';

export class AmbitoController {
  constructor(
    @repository(AmbitoRepository)
    public ambitoRepository: AmbitoRepository,
  ) {}

  @post('/ambitos', {
    responses: {
      '200': {
        description: 'Ambito model instance',
        content: {'application/json': {schema: getModelSchemaRef(Ambito)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ambito, {
            title: 'NewAmbito',
          }),
        },
      },
    })
    ambito: Ambito,
  ): Promise<Ambito> {
    return this.ambitoRepository.create(ambito);
  }

  @get('/ambitos/count', {
    responses: {
      '200': {
        description: 'Ambito model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Ambito))
    where?: Where<Ambito>,
  ): Promise<Count> {
    return this.ambitoRepository.count(where);
  }

  @get('/ambitos', {
    responses: {
      '200': {
        description: 'Array of Ambito model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Ambito)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Ambito))
    filter?: Filter<Ambito>,
  ): Promise<Ambito[]> {
    return this.ambitoRepository.find(filter);
  }

  @patch('/ambitos', {
    responses: {
      '200': {
        description: 'Ambito PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ambito, {partial: true}),
        },
      },
    })
    ambito: Ambito,
    @param.query.object('where', getWhereSchemaFor(Ambito))
    where?: Where<Ambito>,
  ): Promise<Count> {
    return this.ambitoRepository.updateAll(ambito, where);
  }

  @get('/ambitos/{id}', {
    responses: {
      '200': {
        description: 'Ambito model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Ambito),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.query.object('filter', getFilterSchemaFor(Ambito))
    filter?: Filter<Ambito>,
  ): Promise<Ambito> {
    return this.ambitoRepository.findById(id, filter);
  }

  @patch('/ambitos/{id}', {
    responses: {
      '204': {
        description: 'Ambito PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ambito, {partial: true}),
        },
      },
    })
    ambito: Ambito,
  ): Promise<void> {
    await this.ambitoRepository.updateById(id, ambito);
  }

  @put('/ambitos/{id}', {
    responses: {
      '204': {
        description: 'Ambito PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() ambito: Ambito,
  ): Promise<void> {
    await this.ambitoRepository.replaceById(id, ambito);
  }

  @del('/ambitos/{id}', {
    responses: {
      '204': {
        description: 'Ambito DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ambitoRepository.deleteById(id);
  }
}
