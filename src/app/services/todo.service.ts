import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TD} from '../models/Todo'
import { Observable } from 'rxjs';
const httpOptions = {
  headers : new HttpHeaders({
    'Content-type':'aplication/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  urlTodos:string =  'https://jsonplaceholder.typicode.com/todos';
  todosLimit = "?_limit=5";
  constructor(private http:HttpClient) { }

  getTodos():Observable<TD[]>{
    return this.http.get<TD[]>(`${this.urlTodos}${this.todosLimit}`);

  }

  toggleCompleted(td:TD):Observable<any>{
    const url =   `${this.urlTodos}/${td.id}`;
   
    return this.http.put(url,td,httpOptions);
  }

  //deleteTodo 
  deleteTodo(td:TD):Observable<any>{
  
    const url =   `${this.urlTodos}/${td.id}`;
   
    return this.http.delete(url,httpOptions);

  }

  //Add Todo 
  
  addTodoreq(td:TD):Observable<any>{
    return this.http.post(this.urlTodos,td,httpOptions);
    
  }
  
}
