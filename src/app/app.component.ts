import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { DataServiceService } from "./data-service.service";
    //SUBSCRIBE pair with observable 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Name";
  email: string = "Email";
  number: string = "Phone Number";
  picture: string = "";
  UserList: object[] = [] ;

  constructor(private http:Http, private data: DataServiceService){  
  }

  PostData(){
  return this.data.PostAllUser();
      };
  RefreshData() :void{
    //GET-ambildata , POST, DELETE, PUT-updatedate
  return this.data.GetAllUser();
    } 
  }
