import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name:string = 'Daniel D';


  constructor(){
    this.changeName('daniel')
  }


  changeName(name:string):void{
    this.name = name;

  }
}
