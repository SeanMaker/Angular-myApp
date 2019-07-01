import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles:[`
  h3{
    color: aqua;
  }
  .whiteText{
    color: #fff;
  }  
  `],
})
export class AppComponent {

  serverElement= [{type: 'server', name: 'Testserver', content: 'just a test!'}]

  name = 'my-app';
  userName='';
  showSecret=false;
  log=[];

  resetUsername(){
    this.userName='';
  }

  onToggleDetails(){
    this.showSecret=!this.showSecret;
    // this.log.push(this.log.length+1);
    this.log.push(new Date());
  }
}
