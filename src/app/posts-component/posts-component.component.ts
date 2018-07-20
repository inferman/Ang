import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {
  posts: any[];
  private url ='https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {
    http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
      });
  }
  createPost(titleInput: HTMLInputElement) {
    const post = { title: titleInput.value };
    titleInput.value = '';
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.unshift(post);
      });
  }

  ngOnInit() {
  }

}
