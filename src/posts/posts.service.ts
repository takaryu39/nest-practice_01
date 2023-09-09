import { Injectable } from '@nestjs/common';
import { PostType } from './post.interface';

@Injectable()
export class PostsService {
  /* このクラスでしか使えないようにする */
  private readonly posts: PostType[] = [];
  findAll(): PostType[] {
    return this.posts;
  }
}
