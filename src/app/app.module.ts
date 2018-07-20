import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DirsComponent } from './dirs/dirs.component';
import { InputFormatDirective } from './input-format.directive';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormsArrComponent } from './forms-arr/forms-arr.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AutorsListComponent } from './autors-list/autors-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DirsComponent,
    InputFormatDirective,
    CourseFormComponent,
    SignupFormComponent,
    FormsArrComponent,
    ChangePasswordComponent,
    AutorsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
