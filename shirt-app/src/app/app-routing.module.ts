import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShirtsComponent } from '../app/components/shirts/shirts.component';
import { ShirtDetailComponent } from '../app/components/shirt-detail/shirt-detail.component';
import { CartComponent }   from '../app/components/cart/cart.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', redirectTo: '/shirts', pathMatch: 'full' },
  { path: 'shirts', component: ShirtsComponent },
  { path: 'detail/:id', component: ShirtDetailComponent },
  { path: 'cart', component: CartComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

