import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { FoodCartComponent } from './components/food-cart/food-cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';




const routes: Routes = [
  { path:"",component:RestaurantListComponent},
  { path:"restaurant/:id",component:RestaurantDetailComponent},
  { path:"cart",component:FoodCartComponent},
  { path:"login",component:LoginComponent},
  { path:"signup",component:SignupComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
