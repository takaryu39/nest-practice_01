import { Injectable, Logger } from '@nestjs/common';
import { PostType } from './post.interface';

@Injectable()
export class PostsService {
  /* private readonlyはこのクラスでしか使えないようにする */
  private readonly posts: PostType[] = [];

  /* thisは「PostsServiceインスタンス」の中にあるpostという意味*/
  findAll(): PostType[] {
    return this.posts;
  }

  create(post: PostType) {
    this.posts.push(post);
  }
}
