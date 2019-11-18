import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Tipolevel2} from './tipolevel2.model';
import {Level1} from './level1.model';

@model({
  settings: {idInjection: false, dashdb: {schema: 'PKS49073', table: 'LEVEL2'}},
})
export class Level2 extends Entity {
  @property({
    id: true,
    type: String,
    required: true,
    length: 10,
    scale: 0,
    dashdb: {
      columnName: 'UBIDIST',
      dataType: 'VARCHAR',
      dataLength: 10,
      dataScale: 0,
      nullable: 'N',
    },
  })
  ubidist: String;

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
    length: 255,
    scale: 0,
    dashdb: {
      columnName: 'NOMBRE',
      dataType: 'VARCHAR',
      dataLength: 255,
      dataScale: 0,
      nullable: 'Y',
    },
  })
  nombre?: String;

  /*@property({
    type: String,
    required: true,
    length: 6,
    scale: 0,
    dashdb: {
      columnName: 'UBIPROV',
      dataType: 'VARCHAR',
      dataLength: 6,
      dataScale: 0,
      nullable: 'N',
    },
  })
  ubiprov: String;*/

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
      columnName: 'IDTIPO2',
      dataType: 'VARCHAR',
      dataLength: 10,
      dataScale: 0,
      nullable: 'N',
    },
  })
  idtipo2: String;

  @property({
    type: Number,
    required: false,
    length: 8,
    scale: 0,
    dashdb: {
      columnName: 'SUPERFICIE',
      dataType: 'BIGINT',
      dataLength: 8,
      dataScale: 0,
      nullable: 'Y',
    },
  })
  superficie?: Number;

  @property({
    type: Number,
    required: false,
    length: 8,
    scale: 0,
    dashdb: {
      columnName: 'Y',
      dataType: 'DOUBLE',
      dataLength: 8,
      dataScale: 0,
      nullable: 'Y',
    },
  })
  y?: Number;

  @property({
    type: Number,
    required: false,
    length: 8,
    scale: 0,
    dashdb: {
      columnName: 'X',
      dataType: 'DOUBLE',
      dataLength: 8,
      dataScale: 0,
      nullable: 'Y',
    },
  })
  x?: Number;

  @property({
    type: String,
    required: false,
    length: 10,
    scale: 0,
    dashdb: {
      columnName: 'CAPITAL',
      dataType: 'VARCHAR',
      dataLength: 10,
      dataScale: 0,
      nullable: 'Y',
    },
  })
  capital?: String;

  @property({
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
  ubidep: String;

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
    length: 255,
    scale: 0,
    dashdb: {
      columnName: 'NOMBRESUNAT',
      dataType: 'VARCHAR',
      dataLength: 255,
      dataScale: 0,
      nullable: 'Y',
    },
  })
  nombresunat?: String;

  @property({
    type: String,
    required: false,
    length: 255,
    scale: 0,
    dashdb: {
      columnName: 'NOMBREINEI',
      dataType: 'VARCHAR',
      dataLength: 255,
      dataScale: 0,
      nullable: 'Y',
    },
  })
  nombreinei?: String;

  @belongsTo(() => Tipolevel2)
  IDTIPO2: String;

  @belongsTo(() => Level1)
  UBIPROV: String;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Level2>) {
    super(data);
  }
}

export interface Level2Relations {
  // describe navigational properties here
}

export type Level2WithRelations = Level2 & Level2Relations;
