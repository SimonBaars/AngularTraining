import { Injectable } from '@angular/core';
import {ProductsJson, Product, ProductDetails} from "../models/product";
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  remoteProducts: ProductDetails[] = [];
  subject = new BehaviorSubject<ProductDetails[]>([]);
  filter = '';

  constructor(private httpClient: HttpClient) {}

  fetchProducts(id: string): Observable<Product[]> {
    return this.httpClient
      .get<ProductsJson>("https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/"+id+"/details")
      .pipe(map(x => x.products));
  }

  update(): void {
    this.subject.next(this.remoteProducts.filter(e => e.name.toLowerCase().includes(this.filter.toLowerCase())));
  }

  get(): Observable<ProductDetails[]> {
    return this.subject;
  }
}
