import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CreateCityDTO } from './dtos/create-city.dto';

@Controller('cities')
export class CitiesController {
  constructor(private readonly _citiesService: CitiesService) {}

  @Get(':id')
  async getCity(@Param('id', ParseIntPipe) id: number) {
    const city = await this._citiesService.getCity(id);
    return {
      status: 'success',
      city,
    };
  }

  @Get()
  async getAllCities() {
    const city = await this._citiesService.getAllCities();
    return {
      status: 'success',
      city,
    };
  }

  @Post()
  async createCity(@Body() dto: CreateCityDTO) {
    const city = await this._citiesService.createCity(dto);
    return {
      status: 'success',
      city,
    };
  }
}
