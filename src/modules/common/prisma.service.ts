import { Injectable } from '@nestjs/common';
import { Prisma } from '../../../nest/generated/prisma-client';

@Injectable()
export class PrismaService {
  private readonly prismaClient: Prisma;
  constructor() {
    this.prismaClient = new Prisma();
  }

  getClient() {
    return this.prismaClient;
  }
}
