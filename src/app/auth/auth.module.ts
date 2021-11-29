import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BeveragesComponent } from './pages/beverages/beverages.component';
import { DessertsComponent } from './pages/desserts/desserts.component';
import { LoginComponent } from './pages/login/login.component';
import { MainCoursesComponent } from './pages/main-courses/main-courses.component';
import { StartersComponent } from './pages/starters/starters.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    StartersComponent,
    MainCoursesComponent,
    DessertsComponent,
    AddProductComponent,
    UpdateProductComponent,
    BeveragesComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ]
})
export class AuthModule { }
