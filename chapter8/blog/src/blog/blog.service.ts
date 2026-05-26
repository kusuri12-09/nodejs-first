import { Injectable } from '@nestjs/common';
import { PostDto } from './blog.model';
import { Post } from './blog.model';

@Injectable()
export class BlogService {
  posts: Post[] = [];

  getAllPosts() {
    return this.posts;
  }

  createPost(postDto: PostDto) {
    const id = this.posts.length + 1;
    this.posts.push({
      id: id.toString(),
      ...postDto,
      createDt: new Date(),
    });
  }

  getPost(id: string) {
    const post = this.posts.find((post) => {
      return post.id === id;
    });

    console.log(post);
    return post;
  }

  delete(id: string) {
    const filterPosts = this.posts.filter((post) => post.id !== id);
    this.posts = [...filterPosts];
  }

  updatePost(id: string, postDto: PostDto) {
    const updateIndex = this.posts.findIndex((post) => post.id === id);
    const updatePost = { id, ...postDto, updateDt: new Date() };
    this.posts[updateIndex] = updatePost;
    return updatePost;
  }
}
