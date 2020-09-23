
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodOnline } from './food-online';

@Injectable({
  providedIn: 'root'
})
export class FoodOnlineService {

  private url:string;

  constructor(private http:HttpClient) {
    this.url="http://localhost:9002/"
   }

  public getAllFoodOnline():Observable<FoodOnline[]>{

   return this.http.get<FoodOnline[]>(this.url+"food-online-list");

  }

  public addFoodOnline(fd:FoodOnline){

    return this.http.post<FoodOnline[]>(this.url,fd);
 
   }
   


   public deleteFoodOnline(id:number): Observable<FoodOnline>{

    return this.http.delete<FoodOnline>(this.url+ "foodOnline/" + id);
 
   }

   public getfoodbycategory(category:string):Observable<FoodOnline[]>{

    return this.http.get<FoodOnline[]>(this.url + "foodOnlinebycategory" +"/" +category);
 
   }

}
