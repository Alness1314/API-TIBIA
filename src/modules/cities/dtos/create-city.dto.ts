import { IsOptional, IsString } from 'class-validator';

export class CreateCityDTO {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  map: string;
}
