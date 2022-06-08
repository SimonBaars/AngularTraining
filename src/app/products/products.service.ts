import { Injectable } from '@angular/core';
import {BehaviorSubject, concatMap, from, map, mergeMap, Observable} from "rxjs";
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {ProductsJson, Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  remoteProducts: Product[] = [];
  subject = new BehaviorSubject<Product[]>([]);
  filter = '';

  constructor(private httpClient: HttpClient) {}

  fetchProducts(): Observable<Product[]> {
    return this.httpClient
      .get<ProductsJson>("https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list")
      .pipe(map(x => x.products));
  }

  update(): void {
    this.subject.next(this.remoteProducts.filter(e => e.name.toLowerCase().includes(this.filter.toLowerCase())));
  }

  get(): Observable<Product[]> {
    return this.subject;
  }

  set(products: Product[]): void {
    this.remoteProducts = products;
    this.update();
  }

  add(product: Product) {
    this.remoteProducts.push(product);
    this.update();
  }

  textFilter(filter: string) {
    this.filter = filter;
    this.update();
  }
}
