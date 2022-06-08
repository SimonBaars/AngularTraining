import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input("id") id: string;

  constructor() { }

  ngOnInit(): void {
  }

}
