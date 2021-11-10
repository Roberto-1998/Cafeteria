import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  classOpen=false;

  constructor() { }

  ngOnInit(): void {
  }

  addBodyClass(){
    const body=document.getElementById('body');
    this.classOpen=!this.classOpen;
    if(this.classOpen){
        body?.classList.add('open');
    }else{
      body?.classList.remove('open');
    }




  }

}
