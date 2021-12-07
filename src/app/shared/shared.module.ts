import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { BannerComponent } from './banner/banner.component';
import { CategoryTitleComponent } from './category-title/category-title.component';
import { TableProductsComponent } from './table-products/table-products.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { GalleryCarouselComponent } from './gallery-carousel/gallery-carousel.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    MainTitleComponent,
    CategoryTitleComponent,
    TableProductsComponent,
    GalleryCarouselComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    MainTitleComponent,
    CategoryTitleComponent,
    TableProductsComponent,
    GalleryCarouselComponent
  ]
})
export class SharedModule { }
