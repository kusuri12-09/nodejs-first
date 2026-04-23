import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}
  @Get()
  getAllPosts() {
    console.log('모든 게시글 가져오기');
  }

  @Post()
  create(@Body() post: any) {
    console.log('게시글 생성');
    console.log(post);
  }

  @Get('/:id')
  getPost(@Param('id') id: string) {
    console.log(`[id: ${id}] 게시글 하나 가져오기`);
  }

  @Delete('/:id')
  deletePost() {
    console.log('게시글 삭제');
  }

  @Put('/:id')
  updatePost(@Param('id') id: string, @Body() post: any) {
    console.log(`[id: ${id}] 게시글 업데이트`);
    console.log(post);
  }
}
