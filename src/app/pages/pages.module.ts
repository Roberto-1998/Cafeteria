import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesComponent } from './pages.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from '../material/material.module';





@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    MenuComponent,
    ReservationComponent,
    GalleryComponent,
    AboutComponent,
    NotFoundComponent,
    PagesComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    SharedModule,
    CarouselModule,
    FormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAkmzq5JRQVefk2c9uKU-8UUstE1_mKlwM'
    })
  ]

})
export class PagesModule { }
