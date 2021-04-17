import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderListComponent } from './order-list/order-list.component';
// import { Routes } from '@angular/router';

const routes: Routes = [
  {
    'path': 'product-list',
    component: ProductListComponent
  },
  {
    'path': 'order-list',
    component: OrderListComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
