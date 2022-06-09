import { Injectable } from '@angular/core';
import {ProductsJson, Product, ProductDetails} from "../models/product";
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private httpClient: HttpClient) {}

  fetchProductDetails(id: string): Observable<ProductDetails> {
    return this.httpClient
      .get<ProductDetails>("https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/"+id+"/detail");
  }
}
