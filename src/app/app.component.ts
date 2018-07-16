import { Component } from '@angular/core';
import { FavoriteChangesEventArgs } from './favorite/favorite.component';
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

  tweet = {
    body: 'Here is body of tweet',
    isLiked: true,
    likesCount: 10
  };

  onFavoriteChanged( eventArgs: FavoriteChangesEventArgs ) {
    console.log('favorite changed: ', eventArgs);
  }

}
