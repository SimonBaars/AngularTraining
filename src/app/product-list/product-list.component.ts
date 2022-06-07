import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../products.service";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
  }

  addProduct() {
    this.productService.getProducts().push({name: "Ham", price: 13});
  }

  getProducts() {
    return this.productService.getProducts();
  }
}

