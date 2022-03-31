import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { CitiesEntity } from 'src/modules/cities/entities/cities.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';

export class CreateCharacterDTO {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  title: string;

  @IsString()
  sex: string;

  @IsNumber()
  level: number;

  @IsNumber()
  exp: number;

  @IsOptional()
  @IsBoolean()
  status: boolean;

  @IsString()
  vocation: string;

  @IsOptional()
  @IsNumber()
  gold: number;

  @IsString()
  residence: CitiesEntity;

  //@IsNumber()
  user: UserEntity;
}
