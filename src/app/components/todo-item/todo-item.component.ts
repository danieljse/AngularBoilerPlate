import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { TD } from 'src/app/models/Todo';
import {TodoService} from '../../services/todo.service'


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {

  @Input() tdo:TD;
  @Output() deleteTodo: EventEmitter<TD> = new EventEmitter();

  
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes = {
      todo:true,
      'is-completed':this.tdo.completed
    }
    return classes;
  }

  onToggle(tdo){
    console.log('toggle');
    console.log(tdo);
    console.log('toggle');
    tdo.completed = !tdo.completed;
    //togle on server
      this.todoService.toggleCompleted(tdo).subscribe(td=>{
        console.log('response')
        console.log(td);
      })


  }

  onDelete(tdo){

    this.deleteTodo.emit(tdo);
  }
  

}
