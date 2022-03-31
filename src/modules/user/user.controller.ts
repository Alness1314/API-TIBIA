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
import { CreateUserDTO } from './dtos/create-user.dto';
import { UpdateUserDTO } from './dtos/update-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get()
  async getAllUser() {
    const user = await this._userService.getAllUser();
    return {
      status: 'ok',
      data: user,
    };
  }

  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number) {
    const user = await this._userService.getUser(id);
    return {
      status: 'ok',
      data: user,
    };
  }

  @Post()
  async createUser(@Body() dto: CreateUserDTO) {
    const user = await this._userService.createUser(dto);
    return {
      status: 'created ok',
      data: user,
    };
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUserDTO,
  ) {
    const user = await this._userService.updateUser(id, dto);
    return {
      status: 'updated',
      data: user,
    };
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    const user = await this._userService.deleteUser(id);
    return {
      status: 'deleted',
      data: user,
    };
  }
}
