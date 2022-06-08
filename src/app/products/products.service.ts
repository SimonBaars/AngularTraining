import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {BehaviorSubject, concatMap, from, map, mergeMap, Observable} from "rxjs";
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {ProductsJson, RemoteProduct} from "../models/remote_product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  remoteProducts: RemoteProduct[] = [];
  subject = new BehaviorSubject<RemoteProduct[]>([]);
  filter = '';

  constructor(private httpClient: HttpClient) {}

  fetchProducts(): Observable<RemoteProduct[]> {
    return this.httpClient
      .get<ProductsJson>("https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list")
      .pipe(map(x => x.products));
  }

  update(): void {
    this.subject.next(this.remoteProducts.filter(e => e.name.toLowerCase().includes(this.filter.toLowerCase())));
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
    this.update();
  }

  textFilter(filter: string) {
    this.filter = filter;
    this.update();
  }
}
