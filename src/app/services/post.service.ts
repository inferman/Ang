import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import {BadRequest} from '../common/bad-request';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }
  getPosts() {
    return this.http.get(this.url);
  }
  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(
      catchError(
        (error: Response) => {
          if (error.status === 400) {
            return throwError(new BadRequest(error.json()));
          }
          return throwError(new AppError(error.json()));
        })
    );
  }
  updatePost(post) {
    return this.http.put(`${this.url}/${post.id}`, JSON.stringify(post));
  }
  patchPost(post, patchObj) {
    return this.http.patch(`${this.url}/${post.id}`, JSON.stringify(patchObj));
  }
  deletePost(id) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError(
        (error: Response, caught) => {
          if (error.status === 404) {
            return throwError(new NotFoundError());
          }
          return throwError(new AppError(error));
        })
    );
  }
}
