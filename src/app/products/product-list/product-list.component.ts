import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductsService} from "../../products.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Observable} from "rxjs";
import {ProductComponent} from "../product/product.component";
import {Product} from "../../models/product";

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
    // this.getProducts().subscribe(c => console.log(c));
    this.productService.update();

  }

  addProduct() {
    this.productService.add({name: "Ham", price: 13});
    this.productService.update();
  }

  getProducts(): Observable<Product[]> {
    return this.productService.getProducts();
  }

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

  ngAfterViewInit(): void {

  }
}

