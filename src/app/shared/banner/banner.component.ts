import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styles: [
  ]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() etiquetaHijo:any;



}
