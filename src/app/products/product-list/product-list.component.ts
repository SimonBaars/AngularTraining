import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductsService} from "../../products.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Observable} from "rxjs";
import {ProductComponent} from "../product/product.component";
import {Product} from "../../models/product";
import {RemoteProduct} from "../../models/remote_product";
import {Router} from "@angular/router";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-3600deg)' })),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('3000ms ease-in'))
    ])
  ]
})
export class ProductListComponent implements OnInit {
  state: string = 'default';

  constructor(private productService: ProductsService, private router: Router) {
  }

  ngOnInit(): void {
    this.productService.fetchProducts().subscribe(res => this.productService.set(res));
  }

  addProduct() {
    this.productService.add({product_id: this.getRandomInt(999999).toString(), name: "Ham", price: this.getRandomInt(999), image: "https://picsum.photos/200?"+this.getRandomInt(999999)});
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  getProducts(): Observable<RemoteProduct[]> {
    return this.productService.get();
  }

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }
}

