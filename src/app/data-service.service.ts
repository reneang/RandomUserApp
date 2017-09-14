import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataServiceService {

  name: string = "Name";
  email: string = "Email";
  number: string = "Phone Number";
  picture: string = "";
  UserList: object[] = [] ;
  
  constructor(private http:Http) { }
  
  PostAllUser(){
    var body = JSON.stringify({
      "email": "sydney@fife"
  });
    var hd = new Headers ({ "Content-Type" : "application/json"});
    var options = new RequestOptions({ headers : hd });

    this.http.post("https://reqres.in/api/register",body,options)
    .subscribe(
      result =>{
        console.log(result.json())
      },
      error=>{
        console.log(error)
      }
    );
  };

  GetAllUser(){
    //GET-ambildata , POST, DELETE, PUT-updatedate
    this.http.get('https://randomuser.me/api/')
    .subscribe(
    result => {
    var user = result.json().results[0];
    this.name = user.name.first + ' ' + user.name.last;
    this.email = user.email;
    this.number = user.phone;
    this.picture = user.picture.large;
      },
    error => {
      console.log(error);
      }
    );

    this.http.get('https://randomuser.me/api/?results=15')
    .subscribe(
      result => { 
        result.json().results.forEach(user => {
            this.UserList.push({
                "name" : user.name.first + ' ' + user.name.last,
                "email" : user.email,
                "number" : user.phone
              });
          });
      },
      error => { 
        console.log(error);
      }
    );
    }

}
