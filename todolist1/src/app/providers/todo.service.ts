import { Injectable } from '@angular/core';
import {Todo} from '../interface'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoList:Todo[]=[
    {id:999,description:'for test purpose',category:1,content:'test'},
    {id:998,description:'for test purpose 2',category:2,content:'test aaa'},
    {id:997,description:'for test purpose 3',category:3,content:'test bbb'}
  ]
  
  private todoList2:Todo[]=[
    {id:999,description:'2',category:1,content:'test'},
    {id:998,description:'2for test purpose 2',category:1,content:'test aaa'},
    {id:997,description:'2for test purpose 3',category:2,content:'test bbb'}
  ]
  constructor() { }

  getTodos():Todo[]
  {
    return this.todoList;
  }
  delete(ids:number[]):Todo[]{
    
    this.todoList = this.todoList.filter(item => ids.indexOf(item.id)===-1);
    return this.todoList;
  }
  getTodo(id:number):Todo{
    return this.todoList.find(item => item.id === id);

  }
  addTodo(todo:Partial<Todo>):Todo[]{
    console.log("addTodo");
    const id = parseInt(Math.random()*100000+'',10);
    const newTodo = {...todo,id} as Todo;
    this.todoList = [...this.todoList, newTodo];
    console.log(this.todoList);
    return this.todoList;
  }
}
