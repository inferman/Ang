import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TestComponent} from './test.component';
import { CourseComponent } from './course/course.component';
import {TestService} from './test.service';
import { AuthorsComponent } from './authors/authors.component';
import {AuthorsService} from './authors.service';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CourseComponent,
    AuthorsComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TestService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
