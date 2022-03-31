import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UpdateUserDTO } from './dtos/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly _userRepository: Repository<UserEntity>,
  ) {}

  async getUser(id: number): Promise<UserEntity> {
    const user = await this._userRepository.findOne(id);
    if (!user) throw new NotFoundException('Usuario no encontado');
    return user;
  }

  async getAllUser(): Promise<UserEntity[]> {
    return await this._userRepository.find();
  }

  async createUser(dto: CreateUserDTO): Promise<UserEntity> {
    const userExist = await this._userRepository.findOne({ email: dto.email });
    if (userExist)
      throw new BadRequestException(
        'Existe un usuario con esa direccion de correo',
      );

    const user = this._userRepository.create(dto);
    const data = await this._userRepository.save(user);
    delete data.password;
    return data;
  }

  async updateUser(id: number, dto: UpdateUserDTO): Promise<UserEntity> {
    const user = await this.getUser(id);
    const editUser = Object.assign(user, dto);
    return await this._userRepository.save(editUser);
  }

  async deleteUser(id: number): Promise<UserEntity> {
    const user = await this.getUser(id);
    return await this._userRepository.remove(user);
  }
}
