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
    this.getUserId();
    const post = {
      title: titleInput.value,
      body: '',
      userId: this.getUserId()
    };
    titleInput.value = '';
    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.unshift(post);
      }, (error: AppError) => {
        if (error instanceof BadRequest) {
          // this.form.setErrors(error.json());
        } else {
          alert('An unexpected error occured');
          console.log(error);
        }
      });
  }

  getUserId() {
    const userIdsList = this.posts.map(item => item.userId);
    const maxId = Math.max.apply(null, userIdsList);
    const userIdQuantities = this.posts.filter(item =>
      item.userId === maxId
    );
    return userIdQuantities.length < 10 ? maxId : (maxId + 1);
  }

  patchPost(post) {
    const patch = { isRed: true };
    this.service.patchPost(post, patch)
      .subscribe(response => {
        console.log(response.json());
      }, (error: Response) => {
        console.log(error.json());
      });
  }

  deletePost(post, index) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        this.posts.splice(index, 1);
      }, (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('this post has already deleted');
        } else {
          alert('An unexpected error occured');
          console.log(error);
        }
      });
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json();
      }, (error: Response) => {
        console.log(error.json());
      });
  }

}
