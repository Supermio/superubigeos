import {
  Entity,
  model,
  property,
  belongsTo,
  hasMany,
} from '@loopback/repository';
import {Ambito} from './ambito.model';
import {Level1} from './level1.model';
import {Tipolevel0} from './tipolevel0.model';

@model({
  settings: {idInjection: false, dashdb: {schema: 'PKS49073', table: 'LEVEL0'}},
})
export class Level0 extends Entity {
  @property({
    id: true,
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
    required: true,
    length: 2,
    scale: 0,
    dashdb: {
      columnName: 'UBIGEO',
      dataType: 'VARCHAR',
      dataLength: 2,
      dataScale: 0,
      nullable: 'N',
    },
  })
  ubigeo: String;

  @property({
    type: String,
    required: false,
    length: 20,
    scale: 0,
    dashdb: {
      columnName: 'NOMBRE',
      dataType: 'VARCHAR',
      dataLength: 20,
      dataScale: 0,
      nullable: 'Y',
    },
  })
  nombre?: String;

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
    length: 30,
    scale: 0,
    dashdb: {
      columnName: 'NOMBRESUNAT',
      dataType: 'VARCHAR',
      dataLength: 30,
      dataScale: 0,
      nullable: 'Y',
    },
  })
  nombresunat?: String;

  @property({
    type: String,
    required: false,
    length: 30,
    scale: 0,
    dashdb: {
      columnName: 'NOMBREINEI',
      dataType: 'VARCHAR',
      dataLength: 30,
      dataScale: 0,
      nullable: 'Y',
    },
  })
  nombreinei?: String;

  @belongsTo(() => Tipolevel0)
  IDTIPO0: String;
  @hasMany(() => Level1, {keyTo: 'UBIDEP'})
  level1s: Level1[];
  @belongsTo(() => Ambito)
  UBIAMBITO: String;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Level0>) {
    super(data);
  }
}

export interface Level0Relations {
  // describe navigational properties here
}

export type Level0WithRelations = Level0 & Level0Relations;
