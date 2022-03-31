import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCityDTO } from './dtos/create-city.dto';
import { CitiesEntity } from './entities/cities.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(CitiesEntity)
    private readonly _citiesRepository: Repository<CitiesEntity>,
  ) {}

  async getCity(id: number): Promise<CitiesEntity> {
    const city = await this._citiesRepository.findOne(id);
    if (!city) throw new NotFoundException('City not found');
    return city;
  }

  async getAllCities(): Promise<CitiesEntity[]> {
    return await this._citiesRepository.find();
  }

  async createCity(dto: CreateCityDTO) {
    const tempCity = await this._citiesRepository.findOne({
      where: { name: dto.name },
    });
    if (tempCity) throw new NotFoundException('City already exists');

    const city = this._citiesRepository.create(dto);
    await this._citiesRepository.save(city);
    return city;
  }
}
