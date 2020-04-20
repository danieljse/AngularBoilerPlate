import { Component, OnInit } from '@angular/core';
import {TD} from '../../models/Todo';
import {TodoService} from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {

  td:TD[];



  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.td = this.todoService.getTodos().subscribe(tdos=>{
      this.td = tdos;
    });
  
  }

  deleteTodoParrent(td:TD){
    console.log("delete Parrent")
    this.td = this.td.filter(item=> item.id !== td.id);
    this.todoService.deleteTodo(td).subscribe();
  }

  addtodo(td:TD){
    this.todoService.addTodoreq(td).subscribe(todo=>{
      console.log(todo);
      this.td.push(td);
    })
   
  }
    

}
