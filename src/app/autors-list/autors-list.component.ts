import { Component } from '@angular/core';

@Component({
  selector: 'autors-list',
  templateUrl: './autors-list.component.html',
  styleUrls: ['./autors-list.component.css']
})
export class AutorsListComponent {
  authorsList = ['Author1', 'Author2', 'Author3'];
}
