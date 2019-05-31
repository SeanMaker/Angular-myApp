import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: '.app-servers',
  // template: '<app-server></app-server><app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationState='No server was create!';
  serverName='Testserver';

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationState='Server was created!';
  }

  onUpdateServerName(event:any){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
