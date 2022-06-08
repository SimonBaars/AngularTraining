import { Injectable } from '@angular/core';
import {Product} from "./models/product";
import {BehaviorSubject, concatMap, from, map, mergeMap, Observable} from "rxjs";
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {ProductsJson, RemoteProduct} from "./models/remote_product";

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

  remoteProducts: RemoteProduct[] = [];


  subject = new BehaviorSubject<RemoteProduct[]>([]);

  constructor(private httpClient: HttpClient) {

  }

  fetchProducts(): Observable<RemoteProduct[]> {
    return this.httpClient
      .get<ProductsJson>("https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list")
      .pipe(map(x => x.products));
  }

  update(): void {
    this.subject.next(this.remoteProducts);
  }

  get(): Observable<RemoteProduct[]> {
    return this.subject;
  }

  set(products: RemoteProduct[]): void {
    this.remoteProducts = products;
    this.update();
  }

  add(product: RemoteProduct) {
    this.remoteProducts.push(product);
  }
}
