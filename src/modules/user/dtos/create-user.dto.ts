import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { EnumToString } from 'src/modules/common/helpers/EnumToString';
import { AppRoles } from '../roles/app.roles';

export class CreateUserDTO {
  @IsString()
  nombre: string;

  @IsOptional()
  @IsBoolean()
  status: boolean;

  @IsString()
  @IsOptional()
  avatar: string;

  @IsEmail()
  email: string;

  @Length(8, 128)
  password: string;

  @IsArray()
  @IsEnum(AppRoles, {
    each: true,
    message: `debe ser un rol válido, ${EnumToString(AppRoles)}`,
  })
  roles: string[];
}
