import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PurpleBoxComponent} from "./purple-box/purple-box.component";
import { ProductListComponent } from './product-list/product-list.component';
import {ProductComponent} from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    PurpleBoxComponent,
    ProductListComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
