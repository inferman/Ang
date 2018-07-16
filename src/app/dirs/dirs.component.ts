import { Component } from '@angular/core';

@Component({
  selector: 'dirs',
  templateUrl: './dirs.component.html',
  styleUrls: ['./dirs.component.css']
})
export class DirsComponent {
  coursesList = [1, 2];
  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
  ];

  onAdd() {
    this.courses.push({
      id: this.courses.length + 1,
      name: `course${this.courses.length + 1}`
    });
  }

  onRemove(index) {
    this.courses.splice(index, 1);
  }
}
