import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { BlogController } from './blog/blog.controller';
import { BlogService } from './blog/blog.service';

@Module({
  imports: [BlogModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class AppModule {}
