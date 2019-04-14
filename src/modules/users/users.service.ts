import { Injectable } from '@nestjs/common';
import { NewUserDto } from './dto/NewUserDto';
import { PrismaService } from '../common/prisma.service';
import { hashSync } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(user: NewUserDto) {
    user.password = hashSync(user.password, 13);
    return this.prisma.getClient().createUser(user);
  }

  async getUsers() {
    return this.prisma.getClient().users();
  }
}
