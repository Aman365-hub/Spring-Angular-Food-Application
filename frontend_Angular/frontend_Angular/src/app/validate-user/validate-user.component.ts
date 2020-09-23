import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-validate-user',
  templateUrl: './validate-user.component.html',
  styleUrls: ['./validate-user.component.css']
})
export class ValidateUserComponent  {

  
  private user: User;
  private uname:string;
  private pwd:string;
  constructor(private service: UserServiceService, private router: Router) {
    }

  validateUser() {
    this.service.validateUser(this.uname,this.pwd).subscribe(data => {
      this.user = data;
      alert("Logged in  successfully")
      this.router.navigate(['/food-online-list'])
    })
}}


