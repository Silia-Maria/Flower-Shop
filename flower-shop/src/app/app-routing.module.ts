import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FlowersComponent } from './flowers/flowers.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [{
  path: "", component: HomeComponent,
}, {
  path: "flowers", component: FlowersComponent,
}, {
  path: "details/:flowerId", component: DetailsComponent,
}, {
  path: "cart", component: ShoppingCartComponent,
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
