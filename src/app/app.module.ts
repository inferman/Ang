import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponentComponent } from './posts-component/posts-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
