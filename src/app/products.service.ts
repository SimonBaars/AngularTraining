import { Injectable } from '@angular/core';
import {Product} from "./models/product";
import {BehaviorSubject, from, Observable} from "rxjs";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {name: 'Banana', price: 123},
    {name: 'Beanstalk', price: 233},
    {name: 'Gum', price: 543},
    {name: 'Apple', price: 553},
    {name: 'Box', price: 8},
    {name: 'Ammo', price: 64},
    {name: 'Nerf Gun', price: 24},
    {name: 'Keychain', price: 98},
  ];

  subject = new BehaviorSubject<Product[]>([]);

  constructor() { }

  update(): void {
    this.subject.next(this.products);
  }

  getProducts(): Observable<Product[]> {
    return this.subject;
  }

  add(product: Product) {
    this.products.push(product);
  }
}
