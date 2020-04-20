import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.sass']
})
export class AddTodoComponent implements OnInit {

  @Output() TodosComponentPArrent: EventEmitter<any> = new EventEmitter();

  title1:String;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {
      title:this.title1,
      completed:false
    }
    this.TodosComponentPArrent.emit(todo);
  }

  

}
