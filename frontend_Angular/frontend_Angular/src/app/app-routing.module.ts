import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFoodOnlineComponent } from './add-food-online/add-food-online.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteFoodOnlineComponent } from './delete-food-online/delete-food-online.component';
import { FoodOnlineListComponent } from './food-online-list/food-online-list.component';
import { UpdateFoodOnlineComponent } from './update-food-online/update-food-online.component';
import { ValidateUserComponent } from './validate-user/validate-user.component';


const routes: Routes = [
  {path:"add-food-online",component:AddFoodOnlineComponent},
  {path:"delete-food-online",component:DeleteFoodOnlineComponent},
  {path:"food-online-list",component:FoodOnlineListComponent},
  {path:"Update-food-online",component:UpdateFoodOnlineComponent},
  {path:"add-user",component:AddUserComponent},
  {path:"validate-user",component:ValidateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
