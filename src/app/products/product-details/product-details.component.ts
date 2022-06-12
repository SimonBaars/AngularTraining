import {Component, Input, OnInit} from '@angular/core';
import {ProductDetails} from "../../models/product";
import {DetailsService} from "../details.service";
import {ActivatedRoute} from "@angular/router";
import {RandomProductService} from "../random-product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: ProductDetails = {product_id: "0", name: "", price: 0, image: "", description: ""};

  constructor(private detailsService: DetailsService, private randomProductService: RandomProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => this.fetchProductDetails(params["id"]));
  }

  private fetchProductDetails(id: string) {
    return this.detailsService.fetchProductDetails(id)
      .subscribe(details => this.productDetails = details, _ => this.productDetails = this.randomProductService.getDetails());
  }
}
