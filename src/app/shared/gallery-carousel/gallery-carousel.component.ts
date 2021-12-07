import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations'
import { Image } from '../../interfaces/image';

@Component({
  selector: 'app-gallery-carousel',
  templateUrl: './gallery-carousel.component.html',
  styleUrls: ['./gallery-carousel.component.css'],
  animations:[
    trigger('slide-in', [
      state('left', style({
        opacity:0,
        transform:'translateX(-100%)'
      })),
      state('middle', style({
        opacity:1,
        transform:'translateX(0)'
      })),
      state('right', style({
        opacity:0,
        transform:'translateX(100%)'
      })),
      transition('left=>middle',[
        style({
          opacity:0,
          transform:'translateX(100%)'
        }),
        animate('250ms')
      ]),

      transition('right=>middle',[
        style({
          opacity:0,
          transform:'translateX(-100%)'
        }),
        animate('250ms')
      ]),
      transition('middle=> *',[
        animate('250ms')
      ]),

    ])
  ]
})
export class GalleryCarouselComponent implements OnInit {


  @Input() images:Array<Image>;
  @Input() selectedImage:number;
  @Output() closeCarousel=new EventEmitter<void>();

  public animState='middle';
  public animImage:number;

  constructor() { }

  ngOnInit(): void {
    this.animImage=this.selectedImage;
  }

  close(){
    this.closeCarousel.emit();
  }

  previous(){
    this.animState='left';
    this.selectedImage=this.selectedImage > 0 ? this.selectedImage - 1 : this.images.length - 1;
    this.blur();
  }

  next(){
    this.animState='right';
    this.selectedImage=this.selectedImage < this.images.length - 1 ? this.selectedImage + 1 : 0;
    this.blur();
  }

  animDone(){
    this.animImage=this.selectedImage;
    this.animState='middle';
  }

  onEvent(event:Event){
    event.stopPropagation();
  }

  private blur(){
    const activeElement=document.activeElement as HTMLElement;
    if(activeElement !== null){
      activeElement.blur();
    }
  }


}
