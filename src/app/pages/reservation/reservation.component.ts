import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  etiquetaPadre={
    title:'Book a Table',
    link:'/reservation'
  }



  constructor() { }

  ngOnInit(): void {
  }

}
