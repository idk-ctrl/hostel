import { Directive, Renderer2, ElementRef, Input, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverImageRoom]'
})
export class HoverImageRoomDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) { }

    @HostListener('mouseover') mouseover() {
      this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1.1)');
      this.renderer.setStyle(this.elementRef.nativeElement, 'transition', 'all .2s ease-in-out');
    }

    @HostListener('mouseleave') mouseleave() {
      this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1)');
    }
}
