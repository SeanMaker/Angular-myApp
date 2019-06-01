import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles:[`
  h3{
    color: aqua;
  }
  `],
})
export class AppComponent {
  name = 'my-app';
  userName='';

  resetUsername(){
    this.userName='';
  }
}
