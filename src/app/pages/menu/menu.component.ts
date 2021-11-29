import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  etiquetaPadre={
    title:'Menu',
    link:'/menu'
  }

  starters:Product[]=[];
  mainCourses:Product[]=[];
  desserts:Product[]=[];
  beverages:Product[]=[];

  titlePadre:string='Our Favorite Menu'

  constructor(private _productsService:ProductsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getStarters(){
    this._productsService.getProducts().subscribe((resp)=>{
        this.starters=resp.filter((product:Product)=>product.category==='E')
    })
  }

  getMainCourses(){
    this._productsService.getProducts().subscribe((resp)=>{
        this.mainCourses=resp.filter((product:Product)=>product.category==='PP')
    })
  }

  getDesserts(){
    this._productsService.getProducts().subscribe((resp)=>{
        this.desserts=resp.filter((product:Product)=>product.category==='P')
    })
  }

  getBeverages(){
    this._productsService.getProducts().subscribe((resp)=>{
        this.beverages=resp.filter((product:Product)=>product.category==='B')
    })
  }

  getAll(){
    this.getBeverages();
    this.getDesserts();
    this.getMainCourses();
    this.getStarters();
  }

}
