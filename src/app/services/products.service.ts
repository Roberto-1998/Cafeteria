import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../interfaces/product';


const baseUrl=environment.baseUrl;


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:string[]=[];

  constructor(private http:HttpClient) {
  }

  getProducts(){
    return this.http.get(baseUrl).pipe(
      map((resp:any)=>resp.products)
    )
  }

  deleteProduct(id:string){
    return this.http.delete(`${baseUrl}/${id}`);
  }

  createProduct(product:Product){
    return this.http.post(baseUrl, product);
  }

}
