import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { NewPostDto } from './dto/NewPostDto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsSercvice: PostsService) {}

  @Post('')
  async createPost(@Body() post: NewPostDto) {
    return this.postsSercvice.createPost(post);
  }

  @Get('')
  async getPosts() {
    return this.postsSercvice.getPosts();
  }
}
