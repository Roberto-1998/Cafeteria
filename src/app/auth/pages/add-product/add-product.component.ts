import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/interfaces/category';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';





@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  formSubmitted=false;
  addProductForm=this.fb.group({
    name:['', [Validators.required]],
    price:['',[Validators.required]],
    category:['', [Validators.required]],
    top3:[false],
    ingredients:['']
  })


  categories: Category[] = [
    {value: 'E', viewValue: 'Starter'},
    {value: 'PP', viewValue: 'Main Course'},
    {value: 'P', viewValue: 'Dessert'},
    {value: 'B', viewValue: 'Beverage'},
  ];

  constructor(private fb:FormBuilder, private _productsService:ProductsService, private router:Router) { }

  ngOnInit(): void {
  }

  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  ingredients: string[] = [];

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


  addProduct(){

    if(this.addProductForm.invalid){
      console.log('Formulario Incorrecto');
      return;
    }

    //Asignando Ingredientes
    this.addProductForm.reset({
      ...this.addProductForm.value,
      ingredients:this.ingredients
    })



    //Guardar en Database
    this._productsService.createProduct(this.addProductForm.value)
    .subscribe((resp)=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Product has been added',
        showConfirmButton: false,
        timer: 1500
      })

      //Redireccionar a la pagina de la categoria
      if(this.addProductForm.get('category')?.value ==='E'){
          this.router.navigateByUrl('auth/admin/starters');
      }else
      if(this.addProductForm.get('category')?.value ==='PP'){
        this.router.navigateByUrl('auth/admin/main-courses');
      }else
      if(this.addProductForm.get('category')?.value ==='P'){
        this.router.navigate(['auth/admin/desserts'])
      }else{
       this.router.navigate(['auth/admin/beverages'])
      }

    }, (err)=>{
      Swal.fire('Error', err.error.errors.errors[0].msg, 'error')

    })


  }


}


