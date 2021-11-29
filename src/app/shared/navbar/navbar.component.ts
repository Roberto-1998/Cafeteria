import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {

  public scrollOffset:number=0;

  classOpen=false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", ['$event'])
  doSomethingOnScroll($event:any){
   this.scrollOffset = $event.srcElement.children[0].scrollTop;
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
