import { Component, OnInit } from '@angular/core';
import { FoodOnline } from '../food-online';
import { FoodOnlineService } from '../food-online.service';

@Component({
  selector: 'app-food-online-list',
  templateUrl: './food-online-list.component.html',
  styleUrls: ['./food-online-list.component.css']
})
export class FoodOnlineListComponent implements OnInit {

  private foodOnlineLists:FoodOnline[];

  constructor(private service:FoodOnlineService) { }

  ngOnInit() {

    this.service.getAllFoodOnline().subscribe(data=>{
      this.foodOnlineLists=data;
    })
  }

}
