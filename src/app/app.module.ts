import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PurpleBoxComponent} from "./purple-box/purple-box.component";
import {ProductsModule} from "./products/products.module";

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    PurpleBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
