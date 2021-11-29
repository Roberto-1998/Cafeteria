import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { AdminComponent } from './auth/pages/admin/admin.component';
import { StartersComponent } from './auth/pages/starters/starters.component';
import { MainCoursesComponent } from './auth/pages/main-courses/main-courses.component';
import { DessertsComponent } from './auth/pages/desserts/desserts.component';
import { BeveragesComponent } from './auth/pages/beverages/beverages.component';
import { TableProductsComponent } from './shared/table-products/table-products.component';
import { AddProductComponent } from './auth/pages/add-product/add-product.component';
import { UpdateProductComponent } from './auth/pages/update-product/update-product.component';


const routes: Routes = [
  {path:'auth',
  children:[
    {path:'admin', component:AdminComponent, children:[
      {path:'starters', component:StartersComponent},
      {path:'main-courses', component:MainCoursesComponent},
      {path:'desserts', component:DessertsComponent},
      {path:'beverages', component:BeveragesComponent},
      {path:'add-product', component:AddProductComponent},
      {path:'update-product/:id', component:UpdateProductComponent},
    ]},
    {path:'login', component:LoginComponent},
    {path:'', redirectTo:'login', pathMatch:'full'}
  ]

},
{path:'',
component:PagesComponent,
children:[
  {path:'home',component:HomeComponent },
  {path:'menu', component:MenuComponent},
  {path:'contact', component:ContactComponent},
  {path:'about', component:AboutComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'reservation', component:ReservationComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
]
},
{
  path:'table', component:TableProductsComponent
},
{path:'**', component:NotFoundComponent, pathMatch:'full'}
,
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
