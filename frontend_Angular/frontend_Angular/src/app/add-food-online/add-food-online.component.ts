import { Component, OnInit } from '@angular/core';
import { FoodOnline } from '../food-online';
import { FoodOnlineService } from '../food-online.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-food-online',
  templateUrl: './add-food-online.component.html',
  styleUrls: ['./add-food-online.component.css']
})
export class AddFoodOnlineComponent implements OnInit {
  public fd:FoodOnline;

  constructor(private service:FoodOnlineService, private router:Router) {
    this.fd = new FoodOnline();
  }

  addFoodOnline(){
    this.service.addFoodOnline(this.fd).subscribe(res=> {
      this.fd = new FoodOnline();
      this.router.navigate(['/food-online-list'])
    }
    );};

  ngOnInit() {
  }


}
