import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'likes',
  templateUrl: './likes-count.component.html',
  styleUrls: ['./likes-count.component.css']
})
export class LikesCountComponent {
  @Input('isActive') isActive: boolean;
  @Input('likesCount') likesCount: number;

  likesToggler() {
    this.isActive = !this.isActive;
    this.likesCount +=  this.isActive ? -1 : 1;
  }
}

