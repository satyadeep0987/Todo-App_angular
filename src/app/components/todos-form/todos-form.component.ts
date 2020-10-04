import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from '../../models/todo';
import {v4 as uuiddv4} from "uuid";

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css']
})
export class TodosFormComponent implements OnInit {

  todotitle:string;
  constructor(private srv : TodoService) { }

  ngOnInit(): void {
  }

  AddtodoIdtem(){
    const newItem :Todo ={
      id:uuiddv4(),
      title:this.todotitle,
      isComplete:false,
      date:new Date(),
    }

    this.srv.addTodo(newItem);
    this.todotitle = "";
  }
}
