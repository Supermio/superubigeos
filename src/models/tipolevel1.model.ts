import {Entity, model, property, hasMany} from '@loopback/repository';
import {Level1} from './level1.model';

@model({
  settings: {
    idInjection: false,
    dashdb: {schema: 'PKS49073', table: 'TIPOLEVEL1'},
  },
})
export class Tipolevel1 extends Entity {
  @property({
    id: true,
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

  @hasMany(() => Level1, {keyTo: 'IDTIPO1'})
  level1s: Level1[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tipolevel1>) {
    super(data);
  }
}

export interface Tipolevel1Relations {
  // describe navigational properties here
}

export type Tipolevel1WithRelations = Tipolevel1 & Tipolevel1Relations;
