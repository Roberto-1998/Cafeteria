import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {path:'admin', component:LoginComponent},
  {path:'',
     component:PagesComponent,
     children:[
      {path:'home',component:HomeComponent },
      {path:'menu', component:MenuComponent},
      {path:'contact', component:ContactComponent},
      {path:'about', component:AboutComponent},
      {path:'gallery', component:GalleryComponent},
      {path:'reservation', component:ReservationComponent},
      {path:'', redirectTo:'home', pathMatch:'full'}
    ]},
  {path:'**', component:NotFoundComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
