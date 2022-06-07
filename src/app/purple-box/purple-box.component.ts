import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'purple-box',
  templateUrl: './purple-box.component.html',
  styleUrls: ['./purple-box.component.scss'],
  animations: [
    trigger('changeDivDimension', [
      state('initial', style({
        backgroundColor: 'purple',
        width: '100px',
        height: '100px'
      })),
      state('final', style({
        backgroundColor: 'blue',
        width: '200px',
        height: '200px'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ]
})
export class PurpleBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Product list imported");

  }

  currentState = 'initial';

  changeState() {
    console.log("changing state")
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

}
