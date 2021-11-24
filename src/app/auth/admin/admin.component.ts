import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout'
import { ProductsService } from '../../services/products.service';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']

})
export class AdminComponent  {



  @ViewChild(MatSidenav)
  sidenav:any;

  constructor(private observer:BreakpointObserver, private productsService:ProductsService) {
     this.productsService.getProducts();

  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width:880px)']).subscribe((res:BreakpointState)=>{
      if(res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
      }else{
        this.sidenav.mode='side';
        this.sidenav.open();
      }
    })

  }



}
