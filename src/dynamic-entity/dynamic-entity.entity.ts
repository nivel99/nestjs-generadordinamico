//dynamic-entity.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DynamicEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('jsonb') // Usar el tipo de columna adecuado para campos flexibles (por ejemplo, JSONB en PostgreSQL)
  dynamicFields: Record<string, any>; // Usar un tipo adecuado para los campos dinámicos, como un mapa o un objeto JSON
}
