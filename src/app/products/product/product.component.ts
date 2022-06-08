import {AfterViewInit, Component, Directive, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../models/product";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('*', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition(':enter', [
        style({
          transform: 'translateX(-100%)',
          opacity: 0
        }),
        animate('2000ms ease-in')
      ]),
      transition(':leave', [
        animate('2000ms ease-out', style({
          transform: 'translateX(100%)',
          opacity: 0
        }))
      ])
    ])
  ]
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

