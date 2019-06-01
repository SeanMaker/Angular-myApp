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
  serverCreated=false;
  servers=['Testserver','Testserver 2']




  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationState='Server was created! Name is '+ this.serverName;
    this.serverCreated=true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event:any){
    this.serverName=(<HTMLInputElement>event.target).value;
  }



}
