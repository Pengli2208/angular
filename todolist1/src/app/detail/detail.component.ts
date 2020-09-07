import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {TodoService} from '../providers/todo.service'
import { Todo } from '../interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  todo: Todo;
  constructor(private route:ActivatedRoute,private todoService:TodoService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todo = this.todoService.getTodo(id);
  }
  goBack()
  {
      history.back();
  }
}
