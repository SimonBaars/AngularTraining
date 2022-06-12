import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductsService} from "../products.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Observable} from "rxjs";
import {Product} from "../../models/product";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {RandomProductService} from "../random-product.service";

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
  nameControl = new FormControl('');

  constructor(private productService: ProductsService, private randomProductService: RandomProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.productService.fetchProducts().subscribe(res => this.productService.set(res));
    this.nameControl.valueChanges.subscribe(value => this.productService.textFilter(value));
  }

  getProducts(): Observable<Product[]> {
    return this.productService.get();
  }

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

  addProduct() {
    this.productService.add(this.randomProductService.get());
  }
}

