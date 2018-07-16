import { Component } from '@angular/core';

@Component({
  selector: 'dirs',
  templateUrl: './dirs.component.html',
  styleUrls: ['./dirs.component.css']
})
export class DirsComponent {
  coursesList = [1, 2];
  constructor() { }

}
