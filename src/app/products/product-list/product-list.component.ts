import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductsService} from "../../products.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Observable} from "rxjs";
import {ProductComponent} from "../product/product.component";
import {Product} from "../../models/product";
import {RemoteProduct} from "../../models/remote_product";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-3600deg)' })),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('3000ms ease-in'))
    ])
  ]
})
export class ProductListComponent implements OnInit, AfterViewInit {

  state: string = 'default';

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.productService.fetchProducts().subscribe(res => this.productService.set(res));
  }

  addProduct() {
    this.productService.add({id: this.getRandomInt(999999).toString(), name: "Ham", price: 13, image: "https://picsum.photos/200?"+this.getRandomInt(999999)});
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

  ngAfterViewInit(): void {

  }
}

