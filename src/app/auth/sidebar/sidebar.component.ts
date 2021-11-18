import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']

})
export class SidebarComponent  {

  @ViewChild(MatSidenav)
  sidenav:any;

  constructor(private observer:BreakpointObserver) {

  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width:880px)']).subscribe((res:BreakpointState)=>{
      if(res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
      }else{
        this.sidenav.mode='side';
        this.sidenav.open();
      }
    })

  }



}
