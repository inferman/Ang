import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {
  posts: any[];
  constructor(http: Http) {
    http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.posts = response.json();
        console.log(this.posts);
      });
  }

  ngOnInit() {
  }

}
