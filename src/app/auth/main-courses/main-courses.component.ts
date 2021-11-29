import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-main-courses',
  templateUrl: './main-courses.component.html',
  styleUrls: ['./main-courses.component.css']
})
export class MainCoursesComponent implements OnInit {

  mainCourses:Product[]=[];

  constructor(private _productsService:ProductsService) { }

  ngOnInit(): void {
    this.getMainCourses();
  }

  getMainCourses(){
    this._productsService.getProducts()
    .subscribe((data)=>{
     this.mainCourses=data.filter((product:any)=>product.category==='PP');

  })
  }

}
