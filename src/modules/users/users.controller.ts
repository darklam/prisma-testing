import { Body, Controller, Get, Post } from '@nestjs/common';
import { NewUserDto } from './dto/NewUserDto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('')
  async createUser(@Body() user: NewUserDto) {
    return this.usersService.createUser(user);
  }

  @Get('')
  async getUsers() {
    return this.usersService.getUsers();
  }
}
