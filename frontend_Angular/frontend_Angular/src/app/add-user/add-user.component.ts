import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent  {

  private user: User;
  constructor(private service: UserServiceService, private router: Router) {
    this.user = new User();
  }

  addUser() {
    this.service.addUser(this.user).subscribe(data => {
      this.user = new User();
      alert("Registered successfully")
      this.router.navigate(['/food-online-list'])
    })

}

  }


