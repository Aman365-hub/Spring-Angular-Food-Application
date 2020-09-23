import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFoodOnlineComponent } from './add-food-online/add-food-online.component';
import { FoodOnlineListComponent } from './food-online-list/food-online-list.component';
import { UpdateFoodOnlineComponent } from './update-food-online/update-food-online.component';
import { DeleteFoodOnlineComponent } from './delete-food-online/delete-food-online.component';
import { FoodOnlineService } from './food-online.service';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { UserServiceService } from './user-service.service';
import { ValidateUserComponent } from './validate-user/validate-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFoodOnlineComponent,
    FoodOnlineListComponent,
    UpdateFoodOnlineComponent,
    DeleteFoodOnlineComponent,
    AddUserComponent,
    ValidateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FoodOnlineService,UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
