import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../../interfaces/product';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})


export class DessertsComponent implements OnInit {

  desserts:Product[]=[];




  constructor(private _productsService:ProductsService) { }

  ngOnInit(): void {
   this.getDesserts();
  }


  getDesserts(){
    this._productsService.getProducts()
    .subscribe((data)=>{
     this.desserts=data.filter((product:any)=>product.category==='P');

  })
  }

}
