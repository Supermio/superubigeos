import {
  Entity,
  model,
  property,
  belongsTo,
  hasMany,
} from '@loopback/repository';
import {Tipolevel1} from './tipolevel1.model';
import {Level0} from './level0.model';
import {Level2} from './level2.model';

@model({
  settings: {idInjection: false, dashdb: {schema: 'PKS49073', table: 'LEVEL1'}},
})
export class Level1 extends Entity {
  @property({
    id: true,
    type: String,
    required: true,
    length: 10,
    scale: 0,
    dashdb: {
      columnName: 'UBIPROV',
      dataType: 'VARCHAR',
      dataLength: 10,
      dataScale: 0,
      nullable: 'N',
    },
  })
  ubiprov: String;

  @property({
    type: String,
    required: true,
    length: 10,
    scale: 0,
    dashdb: {
      columnName: 'UBIGEO',
      dataType: 'VARCHAR',
      dataLength: 10,
      dataScale: 0,
      nullable: 'N',
    },
  })
  ubigeo: String;

  @property({
    type: String,
    required: false,
    length: 200,
    scale: 0,
    dashdb: {
      columnName: 'NOMBRE',
      dataType: 'VARCHAR',
      dataLength: 200,
      dataScale: 0,
      nullable: 'Y',
    },
  })
  nombre?: String;

  /*@property({
    type: String,
    required: true,
    length: 10,
    scale: 0,
    dashdb: {
      columnName: 'UBIDEP',
      dataType: 'VARCHAR',
      dataLength: 10,
      dataScale: 0,
      nullable: 'N',
    },
  })
  ubidep: String;*/

  @property({
    type: String,
    required: false,
    length: 10,
    scale: 0,
    dashdb: {
      columnName: 'UBIINEI',
      dataType: 'VARCHAR',
      dataLength: 10,
      dataScale: 0,
      nullable: 'Y',
    },
  })
  ubiinei?: String;

  @property({
    type: Number,
    required: false,
    length: 8,
    scale: 0,
    dashdb: {
      columnName: 'ESTADO',
      dataType: 'BIGINT',
      dataLength: 8,
      dataScale: 0,
      nullable: 'Y',
    },
  })
  estado?: Number;

  @property({
    type: String,
    required: true,
    length: 10,
    scale: 0,
    dashdb: {
      columnName: 'IDTIPO1',
      dataType: 'VARCHAR',
      dataLength: 10,
      dataScale: 0,
      nullable: 'N',
    },
  })
  idtipo1: String;

  @property({
    type: String,
    required: false,
    length: 10,
    scale: 0,
    dashdb: {
      columnName: 'UBISUNAT',
      dataType: 'VARCHAR',
      dataLength: 10,
      dataScale: 0,
      nullable: 'Y',
    },
  })
  ubisunat?: String;

  @property({
    type: String,
    required: false,
    length: 200,
    scale: 0,
    dashdb: {
      columnName: 'NOMBRESUNAT',
      dataType: 'VARCHAR',
      dataLength: 200,
      dataScale: 0,
      nullable: 'Y',
    },
  })
  nombresunat?: String;

  @property({
    type: String,
    required: false,
    length: 200,
    scale: 0,
    dashdb: {
      columnName: 'NOMBREINEI',
      dataType: 'VARCHAR',
      dataLength: 200,
      dataScale: 0,
      nullable: 'Y',
    },
  })
  nombreinei?: String;

  @belongsTo(() => Tipolevel1)
  IDTIPO1: String;

  @belongsTo(() => Level0)
  UBIDEP: String;

  @hasMany(() => Level2, {keyTo: 'UBIPROV'})
  level2s: Level2[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Level1>) {
    super(data);
  }
}

export interface Level1Relations {
  // describe navigational properties here
}

export type Level1WithRelations = Level1 & Level1Relations;
