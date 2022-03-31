import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCharacterDTO } from './dtos/create-character.dto';
import { UpdateCharacterDTO } from './dtos/update-character.dto';
import { Character } from './entities/characters.entity';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private readonly _characterRepository: Repository<Character>,
  ) {}

  async getCharacter(id: number) {
    const character = await this._characterRepository.findOne(id);
    if (!character) throw new NotFoundException('Character no existe');
    return character;
  }

  async getAllCharacters(): Promise<Character[]> {
    return await this._characterRepository.find();
  }

  async createCharacter(dto: CreateCharacterDTO) {
    const characterExists = await this._characterRepository.findOne({
      name: dto.name,
    });

    if (characterExists) throw new BadRequestException('Character ya existe');

    const character = this._characterRepository.create(dto);
    const data = await this._characterRepository.save(character);
    return data;
  }

  async updateCharacter(id: number, dto: UpdateCharacterDTO) {
    const character = await this._characterRepository.findOne(id);
    const editUser = Object.assign(character, dto);
    console.log(editUser);
    return await this._characterRepository.save(editUser);
  }

  async deleteCharacter(id: number) {
    const character = await this._characterRepository.findOne(id);
    return await this._characterRepository.remove(character);
  }
}
