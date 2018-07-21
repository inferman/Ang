import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {
  posts: any[];

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
      }, error => {
        console.log(error.json());
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
      }, error => {
        console.log(error.json());
      });
  }

  deletePost(post, index) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        this.posts.splice(index, 1);
      }, error => {
        console.log(error.json());
      });
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json();
      }, error => {
        console.log(error.json());
      });
  }

}
