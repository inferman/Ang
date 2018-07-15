import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  getAuthors() {
    return [
      {name: 'Clark', rating: 5},
      {name: 'Azimov', rating: 5},
      {name: 'Saimak', rating: 4},
      {name: 'Dickson', rating: 2},
      {name: 'Prachett', rating: 4},
    ];
  }
  constructor() { }
}
