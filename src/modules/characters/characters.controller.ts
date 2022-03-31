import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CreateCharacterDTO } from './dtos/create-character.dto';
import { UpdateCharacterDTO } from './dtos/update-character.dto';

@Controller('characters')
export class CharactersController {
  constructor(private readonly _charactersService: CharactersService) {}

  @Get(':id')
  async getCharacter(@Param('id', ParseIntPipe) id: number) {
    const character = await this._charactersService.getCharacter(id);
    return {
      message: 'Character found',
      character,
    };
  }

  @Get()
  async getAllCharacters() {
    const characters = await this._charactersService.getAllCharacters();
    return {
      message: 'Characters found',
      characters,
    };
  }

  @Post()
  async createCharacter(@Body() dto: CreateCharacterDTO) {
    const character = await this._charactersService.createCharacter(dto);
    return {
      message: 'Character created',
      character,
    };
  }

  @Put(':id')
  async updateCharacter(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCharacterDTO,
  ) {
    console.log(dto);
    const character = await this._charactersService.updateCharacter(id, dto);
    return {
      message: 'Character updated',
      data: character,
    };
  }

  @Delete(':id')
  async deleteCharacter(@Param('id', ParseIntPipe) id: number) {
    const character = await this._charactersService.deleteCharacter(id);
    return {
      message: 'Character deleted',
      character,
    };
  }
}
