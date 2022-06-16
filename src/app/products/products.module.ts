import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductComponent} from "./product/product.component";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
