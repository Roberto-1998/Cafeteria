import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-title',
  templateUrl: './main-title.component.html',
  styles: [
  ]
})
export class MainTitleComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  @Input() title='';

}