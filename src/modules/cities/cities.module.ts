import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesEntity } from './entities/cities.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CitiesEntity])],
  providers: [CitiesService],
  controllers: [CitiesController],
})
export class CitiesModule {}
