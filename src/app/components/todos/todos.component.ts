import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from '../../models/todo';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  fatrash= faTrashAlt;
  todo :Todo[];
  constructor( private todoser :TodoService) { }

  ngOnInit(): void {
    this.todoser.getTodo().subscribe(todos => {
      this.todo = todos;
    });
  }

  changeTodo(todo:Todo){
    this.todoser.changestatus(todo);
  }

  delettodo(todo:Todo){
    this.todoser.deleteTodo(todo);
  }



}
