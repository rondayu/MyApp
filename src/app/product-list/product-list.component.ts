import { Component, OnInit } from '@angular/core';
import { Products } from "../mock-product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products= Products;
  name: String;
  price: number;
  constructor() { }

  ngOnInit(): void {
    this.name= "这是商品名";
    this.price= 99.9;;
  }

}
