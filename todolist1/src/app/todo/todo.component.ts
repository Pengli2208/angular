import { Component, OnInit } from '@angular/core';
import { importType } from '@angular/compiler/src/output/output_ast';
import {Todo} from '../interface'
import { TodoService } from '../providers/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService:TodoService) { }
  todoList:Todo[];
  
  ngOnInit(): void {
    this.todoList = this.todoService.getTodos();
  }
  delete(ids:number[])
  {
    this.todoList = this.todoService.delete(ids);
  }
  add(data:Partial<Todo>)
  {
    this.todoList = this.todoService.addTodo(data);
  }
}
