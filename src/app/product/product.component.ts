import {AfterViewInit, Component, Directive, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Product} from "../models/product";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
@Input()
export class ProductComponent implements AfterViewInit {
  @Input() product: Product;
  @ViewChild('productImage') productImage!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.productImage.nativeElement.src+="?"+this.getRandomInt(999999);
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

}

