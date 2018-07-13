import { Component } from '@angular/core';
import {CourseComponent} from './course/course.component';
import {TestService} from './test.service';

@Component({
  selector: 'test-component',
  template: `
    <h1>{{ getTitle() }}</h1>
    <h3>{{ message }}</h3>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
  `
})
export class TestComponent {
  title = 'List of Courses';
  message = 'List:';
  courses;
  getTitle() {
    return this.title;
  }

  constructor() {
    let service = new TestService();
    this.courses = service.getCourses();
  }
}
