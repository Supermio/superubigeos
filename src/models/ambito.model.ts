import {Entity, model, property, hasMany} from '@loopback/repository';
import {Level0} from './level0.model';

@model({
  settings: {idInjection: false, dashdb: {schema: 'PKS49073', table: 'AMBITO'}},
})
export class Ambito extends Entity {
  @property({
    id: true,
    type: String,
    required: true,
    length: 10,
    scale: 0,
    dashdb: {
      columnName: 'UBIAMBITO',
      dataType: 'VARCHAR',
      dataLength: 10,
      dataScale: 0,
      nullable: 'N',
    },
  })
  ubiambito: String;

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

  @hasMany(() => Level0, {keyTo: 'UBIAMBITO'})
  level0s: Level0[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Ambito>) {
    super(data);
  }
}

export interface AmbitoRelations {
  // describe navigational properties here
}

export type AmbitoWithRelations = Ambito & AmbitoRelations;
