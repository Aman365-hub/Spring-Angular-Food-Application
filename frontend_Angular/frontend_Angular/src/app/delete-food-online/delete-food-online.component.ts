import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodOnline } from '../food-online';
import { FoodOnlineService } from '../food-online.service';


@Component({
  selector: 'app-delete-food-online',
  templateUrl: './delete-food-online.component.html',
  styleUrls: ['./delete-food-online.component.css']
})
export class DeleteFoodOnlineComponent implements OnInit{
  public id:number;
  public fd:FoodOnline;
  ngOnInit() {}
  constructor(private service: FoodOnlineService, private router:Router) {

   }

   deleteFoodOnline(){
     this.service.deleteFoodOnline(this.id).subscribe(data => {
       this.fd = data;
       this.router.navigate(['/food-online-list']);
     })
   }
}
