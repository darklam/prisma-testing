import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { NewPostDto } from './dto/NewPostDto';
import { Prisma } from '../../../nest/generated/prisma-client';

@Injectable()
export class PostsService {
  private readonly prisma: Prisma;

  constructor(private readonly prismaService: PrismaService) {
    this.prisma = prismaService.getClient();
  }

  async createPost(post: NewPostDto) {
    const postInput = {
      ...post,
      author: {
        connect: { id: post.author }
      }
    };

    return this.prisma.createPost(postInput);
  }

  async getPosts() {
    return this.prisma.posts();
  }
}
