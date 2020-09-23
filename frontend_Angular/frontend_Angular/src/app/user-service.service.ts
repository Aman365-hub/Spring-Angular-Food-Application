import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url:string;

  constructor(private http:HttpClient) { 
    this.url="http://localhost:9002/"
  }

  public addUser(us:User){

    return this.http.post<User>(this.url+"add-user",us);
 
   }

   public validateUser(uname:string,pwd:string):Observable<User>{

    return this.http.get<User>(this.url+"validate-user/"+uname+"/"+pwd);
 
   }
}
