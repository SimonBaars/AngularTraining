import { Injectable } from '@angular/core';
import {Product, ProductDetails} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class RandomProductService {

  constructor() { }

  get(): Product {
    return {product_id: this.getRandomInt(999999).toString(), name: this.getRandomWord(), price: this.getRandomInt(999), image: "https://picsum.photos/200?"+this.getRandomInt(999999)};
  }

  getDetails(): ProductDetails {
    const product: Product = this.get();
    return {product_id: product.product_id, name: product.name, price: product.price, image: "https://picsum.photos/500?"+this.getRandomInt(999999), description: this.getRandomSentence()};
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  getRandomWord(): string {
    return {0: "wrench", 1: "bag of popcorn", 2: "clothes pin", 3: "quilt", 4: "plastic fork", 5: "spool of thread", 6: "lemon", 7: "chenille stick", 8: "miniature portrait", 9: "baseball", 10: "bottle of paint", 11: "cork", 12: "cowboy hat", 13: "bread", 14: "frying pan", 15: "toothpick", 16: "plush octopus", 17: "rubber stamp", 18: "tree", 19: "whale", 20: "phone", 21: "flowers", 22: "package of glitter", 23: "pair of socks", 24: "purse", 25: "music CD", 26: "sand paper", 27: "sword", 28: "bananas", 29: "clay pot", 30: "box of chocolates", 31: "baseball bat", 32: "bottle of water", 33: "panda", 34: "quilt", 35: "pair of earrings", 36: "towel", 37: "carrots", 38: "chocolate", 39: "bag", 40: "garden spade", 41: "nail clippers", 42: "notepad", 43: "spoon", 44: "ice cream stick", 45: "hair brush", 46: "straw", 47: "toy car", 48: "spring", 49: "carrot", 50: "word search", 51: "bottle of pills", 52: "rubber stamp", 53: "matchbook", 54: "roll of gauze", 55: "slipper", 56: "tennis ball", 57: "pair of handcuffs", 58: "sticky note", 59: "fishing hook", 60: "spool of thread", 61: "grid paper", 62: "mop", 63: "blowdryer", 64: "garden spade", 65: "bandana", 66: "box", 67: "fridge", 68: "washcloth", 69: "game CD", 70: "domino set", 71: "piece of gum", 72: "hair ribbon", 73: "fake flowers", 74: "clock", 75: "sword", 76: "hair clip", 77: "umbrella", 78: "spectacles", 79: "screw", 80: "pair of dice", 81: "matchbook", 82: "wine glass", 83: "lace", 84: "wedding ring", 85: "quartz crystal", 86: "candlestick", 87: "tennis ball", 88: "mouse pad", 89: "can of whipped cream", 90: "spatula", 91: "sofa", 92: "coffee mug", 93: "handbasket", 94: "dolphin", 95: "flag", 96: "sword", 97: "pair of safety goggles", 98: "mobile phone", 99: "sun glasses"}[this.getRandomInt(100)] as string;
  }

  getRandomSentence(): string {
    const times: number = this.getRandomInt(100);
    let output: string = "";
    for(let i = 0; i<times; i++) {
      output += this.getRandomWord();
      if(i !== times-1) {
        output += " ";
      }
    }
    return output;
  }
}
