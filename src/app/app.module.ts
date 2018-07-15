import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TestComponent} from './test.component';
import { CourseComponent } from './course/course.component';
import {TestService} from './test.service';
import { AuthorsComponent } from './authors/authors.component';
import {AuthorsService} from './authors.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CourseComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TestService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
