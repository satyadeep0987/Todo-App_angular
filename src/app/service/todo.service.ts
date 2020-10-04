import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos:Todo[];
  constructor() {
    this.todos = [
      {
        id:"123",
        title:"Hello",
        isComplete:true,
        date:new Date
      },
      {
        id:"111",
        title:"learn",
        isComplete:true,
        date:new Date
      },
      {
        id:"144",
        title:"Good",
        isComplete:false,
        date:new Date
      },
    ]
   }

   getTodo(){
     return of(this.todos);
   }

   addTodo(todo:Todo){
    this.todos.push(todo);
   }

   changestatus(todo:Todo){
     this.todos.map((eachTodo:Todo)=>{
       if(todo.id == eachTodo.id)
       {
        todo.isComplete = !todo.isComplete;
       }
     });
   }

   deleteTodo(todo:Todo){
     const indexOfTodo = this.todos.findIndex(
       (currntTodo:Todo)=> currntTodo.id == todo.id,
       );
      this.todos.splice(indexOfTodo,1);
   }
}
