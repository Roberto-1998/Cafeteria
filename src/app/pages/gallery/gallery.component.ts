import { Component, OnInit } from '@angular/core';

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

  titlePadre:string='Foodbar Gallery';

  constructor() { }

  ngOnInit(): void {
  }



}
