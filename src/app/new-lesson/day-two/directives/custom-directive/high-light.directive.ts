import { Directive, ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})

export class HighLightDirective {

  constructor(private ele: ElementRef, private render: Renderer2) { }


  @HostBinding('style.backgroundColor') bgColor = 'aqua';

  @HostListener('mouseenter') eventHover(): void {
    this.ele.nativeElement.style.backGroundColor = 'yellow';
    const divChild = this.render.createElement('div');
    this.render.setStyle(divChild,'background-color','red')
    this.render.appendChild(this.ele.nativeElement, divChild);
    this.render.setStyle(this.ele.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave') eventLeave(): void {
    this.ele.nativeElement.style.backGroundColor = 'blue';
    // this.render.setStyle(this.ele.nativeElement, 'background-color', 'blue');
  }
}
