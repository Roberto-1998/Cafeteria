import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  etiquetaPadre={
    title:'Menu',
    link:'/menu'
  }

  titlePadre:string='Our Favorite Menu'

  constructor() { }

  ngOnInit(): void {
  }

}
