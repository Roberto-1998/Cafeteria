import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/interfaces/category';

import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';






@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {



  categories: Category[] = [
    {value: 'E', viewValue: 'Starter'},
    {value: 'PP', viewValue: 'Main Course'},
    {value: 'P', viewValue: 'Dessert'},
    {value: 'B', viewValue: 'Beverage'},
  ];

  constructor(private fb:FormBuilder, private _productsService:ProductsService, private route:ActivatedRoute, private router:Router) {

    this.route.params.subscribe(({id})=>{
      this.id=id;
      this.getProductById(id);
    })

  }

  ngOnInit(): void {
  }

  product:any;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  ingredients: string[] = [];
  id:string='';




  updateProductForm=this.fb.group({
    name:['', [Validators.required]],
    price:['',[Validators.required]],
    category:['', [Validators.required]],
    top3:[false],
    ingredients:['']
  })




  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.ingredients.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(ingredient: string): void {
    const index = this.ingredients.indexOf(ingredient);

    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
  }


  getProductById(id:string){
    this._productsService.getProductById(id).subscribe((resp)=>{
      this.product=resp;

      //Asignar Ingredientes
      this.ingredients=this.product.ingredients;

      this.updateProductForm.reset({
        ...this.product
      })

    })

  }


  updateProduct(){

    if(this.updateProductForm.invalid){
      console.log('Formulario Incorrecto');
      return;
    }

    //Asignando Ingredientes
    this.updateProductForm.reset({
      ...this.updateProductForm.value,
      ingredients:this.ingredients
    })

    //Guardar en Database
    this._productsService.updateProductById( this.id, this.updateProductForm.value)
    .subscribe((resp)=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Product has been updated',
        showConfirmButton: false,
        timer: 1500
      })

      //Redireccionar a la pagina de la categoria
      if(this.updateProductForm.get('category')?.value ==='E'){
          this.router.navigateByUrl('auth/admin/starters');
      }else
      if(this.updateProductForm.get('category')?.value ==='PP'){
        this.router.navigateByUrl('auth/admin/main-courses');
      }else
      if(this.updateProductForm.get('category')?.value ==='P'){
        this.router.navigate(['auth/admin/desserts'])
      }else{
       this.router.navigate(['auth/admin/beverages'])
      }

    }, (err)=>{
      Swal.fire('Error', err.error.errors.errors[0].msg, 'error')

    })


  }


}


