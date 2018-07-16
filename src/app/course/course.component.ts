import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  title = 'Some image';
  imgUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  tableText = 'sadfasdf dsafsadfsd sdfsadfsdsdfsdaf sdfsadf';
  isActive = true;
  someVariable = 'teeeeeeext';

  onSave($event) {
    $event.stopPropagation();
    console.log('button was clicked', $event);
  }
  onKeyup() {
    console.log('enter was clicked');
  }
  onKeyupTxt(txt) {
    console.log(txt);
  }

  onKeyupVar() {
    console.log(this.someVariable);
  }
}
