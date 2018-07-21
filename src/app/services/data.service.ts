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
export class DataService {
  constructor(private url: string, private http: Http) { }
  getAll() {
    return this.http.get(this.url).pipe(
      catchError(this.handleError)
    );
  }
  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      catchError(this.handleError)
    );
  }
  update(resource) {
    return this.http.put(`${this.url}/${resource.id}`, JSON.stringify(resource)).pipe(
      catchError(this.handleError)
    );
  }
  patch(resource, patchObj) {
    return this.http.patch(`${this.url}/${resource.id}`, JSON.stringify(patchObj)).pipe(
      catchError(this.handleError)
    );
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadRequest(error.json()));
    }
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    return throwError(new AppError(error));
  }
}
