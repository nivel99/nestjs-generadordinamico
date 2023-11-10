import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DynamicEntity } from './dynamic-entity.entity';

@Injectable()
export class DynamicEntityService {
  constructor(
    @InjectRepository(DynamicEntity)
    private readonly dynamicEntityRepository: Repository<DynamicEntity>,
  ) {}

  async findAll() {
    return this.dynamicEntityRepository.find();
  }

  async create(data: any) {
    const entity = this.dynamicEntityRepository.create(data);
    return this.dynamicEntityRepository.save(entity);
  }

  async remove(id: string) {
    // Utiliza las opciones de búsqueda de TypeORM para buscar por ID
    await this.dynamicEntityRepository.delete(id);
  }
}
