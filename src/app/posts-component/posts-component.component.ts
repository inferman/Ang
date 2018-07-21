import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';
import {BadRequest} from '../common/bad-request';

@Component({
  selector: 'posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {
  posts: any[];
  form;
  constructor(private service: PostService) { }

  createPost(titleInput: HTMLInputElement) {
    const post = { title: titleInput.value };
    this.posts.unshift(post);

    titleInput.value = '';

    this.service.create(post)
      .subscribe(
      newPost => {
        post['id'] = newPost.id;
      },
      (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadRequest) {
           // this.form.setErrors(error.originalError);
        } else { throw error; }
      });
  }

  patchPost(post) {
    const patch = { isRed: true };
    this.service.patch(post, patch)
      .subscribe(patchedPost => console.log(patchedPost) );
  }

  deletePost(post, index) {
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(null, (error: AppError) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError) {
          alert('this post has already deleted');
        } else { throw error; }
      });
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

}
