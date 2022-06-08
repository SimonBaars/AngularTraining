import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductComponent} from "./product/product.component";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
