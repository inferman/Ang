import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styles: [`
    p { color: #0f0; }
  `],
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean;
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    //this.click.emit(this.isSelected); // passing simple property
    this.click.emit({ newValue: this.isSelected }); // passing the object
  }

}

export interface FavoriteChangesEventArgs {
  newValue: boolean
}
