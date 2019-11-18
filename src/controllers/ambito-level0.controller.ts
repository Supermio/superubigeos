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
import {Ambito, Level0} from '../models';
import {AmbitoRepository} from '../repositories';

export class AmbitoLevel0Controller {
  constructor(
    @repository(AmbitoRepository) protected ambitoRepository: AmbitoRepository,
  ) {}

  @get('/ambitos/{id}/level0s', {
    responses: {
      '200': {
        description: "Array of Level0's belonging to Ambito",
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
    return this.ambitoRepository.level0s(id).find(filter);
  }

  @post('/ambitos/{id}/level0s', {
    responses: {
      '200': {
        description: 'Ambito model instance',
        content: {'application/json': {schema: getModelSchemaRef(Level0)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Ambito.prototype.ubiambito,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Level0, {
            title: 'NewLevel0InAmbito',
            exclude: ['ubidep'],
            optional: ['UBIAMBITO'],
          }),
        },
      },
    })
    level0: Omit<Level0, 'ubidep'>,
  ): Promise<Level0> {
    return this.ambitoRepository.level0s(id).create(level0);
  }

  @patch('/ambitos/{id}/level0s', {
    responses: {
      '200': {
        description: 'Ambito.Level0 PATCH success count',
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
    return this.ambitoRepository.level0s(id).patch(level0, where);
  }

  @del('/ambitos/{id}/level0s', {
    responses: {
      '200': {
        description: 'Ambito.Level0 DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: String,
    @param.query.object('where', getWhereSchemaFor(Level0))
    where?: Where<Level0>,
  ): Promise<Count> {
    return this.ambitoRepository.level0s(id).delete(where);
  }
}
