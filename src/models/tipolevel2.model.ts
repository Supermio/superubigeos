import {Entity, model, property, hasMany} from '@loopback/repository';
import {Level2} from './level2.model';

@model({
  settings: {
    idInjection: false,
    dashdb: {schema: 'PKS49073', table: 'TIPOLEVEL2'},
  },
})
export class Tipolevel2 extends Entity {
  @property({
    id: true,
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
    type: String,
    required: false,
    length: 100,
    scale: 0,
    dashdb: {
      columnName: 'NOMBRE',
      dataType: 'VARCHAR',
      dataLength: 100,
      dataScale: 0,
      nullable: 'Y',
    },
  })
  nombre?: String;

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

  @hasMany(() => Level2, {keyTo: 'IDTIPO2'})
  level2s: Level2[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tipolevel2>) {
    super(data);
  }
}

export interface Tipolevel2Relations {
  // describe navigational properties here
}

export type Tipolevel2WithRelations = Tipolevel2 & Tipolevel2Relations;
