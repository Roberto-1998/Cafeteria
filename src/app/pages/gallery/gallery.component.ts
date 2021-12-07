import { Component, OnInit } from '@angular/core';
import { Image } from '../../interfaces/image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  etiquetaPadre={
    title:'Gallery',
    link:'/gallery'
  }

  selectedImage?: any=0;

  images=[
    {
      url:'../../../assets/img/gallery/g1.jpg',
      row:'1/3'
    },
    {
      url:'../../../assets/img/gallery/g2.jpg',

    },
    {
      url:'../../../assets/img/gallery/g3.jpg',

    },
    {
      url:'../../../assets/img/gallery/g4.jpg',

    },
    {
      url:'../../../assets/img/gallery/g5.jpg',

    },
    {
      url:'../../../assets/img/gallery/g6.jpg',
     row:'2/4',
     col:'3'
    },
    {
      url:'../../../assets/img/gallery/g7.jpg',
    }

  ] as Array<Image>;

  titlePadre:string='Foodbar Gallery';

  constructor() { }

  ngOnInit(): void {
  }



}
