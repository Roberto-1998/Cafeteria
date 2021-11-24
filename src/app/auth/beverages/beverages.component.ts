import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {
  beverages:Product[]=[];

  constructor(private _productsService:ProductsService) { }

  ngOnInit(): void {
    this.getBeverages();
  }

  getBeverages(){
    this._productsService.getProducts()
    .subscribe((data)=>{
     this.beverages=data.filter((product:any)=>product.category==='B');

  })
  }

}
