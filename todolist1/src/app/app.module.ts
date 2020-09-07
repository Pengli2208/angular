import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {AboutModule} from './about/about.module';
import { InlineComponent } from './inline/inline.component'
import {LayoutModule} from './layout/layout.module'
import{RouterModule, Routes}from '@angular/router'
import { AboutComponent } from './about/about.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailComponent } from './detail/detail.component'
import {TodoService} from './providers/todo.service'
import {CategoryPipe} from './pipes/category.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    InlineComponent,
    CreateTodoComponent,
    TodoListComponent,
    DetailComponent,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
