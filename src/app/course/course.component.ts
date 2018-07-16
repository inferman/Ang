import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = 'Some image';
  imgUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  tableText = 'sadfasdf dsafsadfsd sdfsadfsdsdfsdaf sdfsadf';
  isActive = true;
  ngOnInit() {
  }
}
