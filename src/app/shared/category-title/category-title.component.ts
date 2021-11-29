import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-title',
  templateUrl: './category-title.component.html',
  styleUrls: ['./category-title.component.css']
})
export class CategoryTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() category:string='';
}
