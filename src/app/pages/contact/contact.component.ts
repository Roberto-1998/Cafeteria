import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat = 23.125902;
  lng = -82.419455;


  public etiquetaPadre={
    title:'Contact',
    link:'/contact'
  }



  constructor() { }

  ngOnInit(): void {
  }

}
