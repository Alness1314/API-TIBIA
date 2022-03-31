import { PartialType } from '@nestjs/mapped-types';
import { CreateCharacterDTO } from './create-character.dto';

export class UpdateCharacterDTO extends PartialType(CreateCharacterDTO) {}
