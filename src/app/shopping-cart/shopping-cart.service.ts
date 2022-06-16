import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {CartProducts, Product, ProductsJson} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products: CartProducts;


  private readonly CART_LOCAL_STORAGE = "cart";

  constructor() {
    if(!localStorage.getItem(this.CART_LOCAL_STORAGE)) {
      localStorage.setItem(this.CART_LOCAL_STORAGE, "{}");
    }
  }

  getProducts(): CartProducts {
    return JSON.parse(localStorage.getItem(this.CART_LOCAL_STORAGE) as string) as CartProducts;
  }

  addProduct(id: string): void {
    let products = this.getProducts();
    if(id in products) {
      products[id]++;
    } else {
      localStorage.setItem(this.CART_LOCAL_STORAGE, JSON.stringify(products));
    }
  }
}
