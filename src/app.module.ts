//app.module
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicEntity } from './dynamic-entity/dynamic-entity.entity';
import { DynamicEntityController } from './dynamic-entity/dynamic-entity.controller';
import { DynamicEntityService } from './dynamic-entity/dynamic-entity.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'eternidad2680',
      username: 'postgres',
      entities: [DynamicEntity],
      database: 'test',
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([DynamicEntity]),
  ],
  controllers: [DynamicEntityController], // Usa DynamicEntityController en lugar de AppController
  providers: [DynamicEntityService], // Usa DynamicEntityService en lugar de AppService
})
export class AppModule {}
