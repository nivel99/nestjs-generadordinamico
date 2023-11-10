//dynamic-entity.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DynamicEntityService } from './dynamic-entity.service';

@Controller('dynamic-entities')
export class DynamicEntityController {
  constructor(private readonly dynamicEntityService: DynamicEntityService) {}

  @Get()
  findAll() {
    return this.dynamicEntityService.findAll();
  }

  @Post()
  create(@Body() data: any) {
    return this.dynamicEntityService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dynamicEntityService.remove(id);
  }
}
