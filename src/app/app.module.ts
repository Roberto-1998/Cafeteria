import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PagesComponent } from './pages/pages.component';
import { BannerComponent } from './shared/banner/banner.component';
import { MainTitleComponent } from './shared/main-title/main-title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './auth/login/login.component';

import { AdminComponent } from './auth/admin/admin.component';

import { StartersComponent } from './auth/starters/starters.component';
import { MainCoursesComponent } from './auth/main-courses/main-courses.component';
import { DessertsComponent } from './auth/desserts/desserts.component';
import { BeveragesComponent } from './auth/beverages/beverages.component';
import { TableProductsComponent } from './auth/shared/table-products/table-products.component';


import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { CategoryTitleComponent } from './auth/category-title/category-title.component';
import { AddProductComponent } from './auth/add-product/add-product.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    ReservationComponent,
    GalleryComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    NotFoundComponent,
    PagesComponent,
    BannerComponent,
    MainTitleComponent,

    AdminComponent,
    StartersComponent,
    MainCoursesComponent,
    DessertsComponent,
    BeveragesComponent,
    TableProductsComponent,
    CategoryTitleComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatTableModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatTreeModule,
    MatChipsModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
