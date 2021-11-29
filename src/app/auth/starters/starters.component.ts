import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-starters',
  templateUrl: './starters.component.html',
  styleUrls: ['./starters.component.css']
})
export class StartersComponent implements OnInit {

  starters:Product[]=[];

  constructor(private _productsService:ProductsService) { }

  ngOnInit(): void {
    this.getDesserts();
  }

  getDesserts(){
    this._productsService.getProducts()
    .subscribe((data)=>{
     this.starters=data.filter((product:any)=>product.category==='E');

  })
  }

}
