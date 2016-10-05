import { 
  Directive, 
  HostListener,
  ElementRef,
  Renderer
} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  private toggle: boolean = false;

  @HostListener('click') clickHandler():void {
    this.toggle = !this.toggle;

    if (this.toggle) {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor', '#2196F3');
    } else {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor', '#8BC34A');
    }
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

}
