import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rootTitle = 'Angular root app title';
  post = {
    title: 'Title',
    isFavorite: true
  };

  onFavoriteChanged() {
    console.log('favorite changed');
  }
}
