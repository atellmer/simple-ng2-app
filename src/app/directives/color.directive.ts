import { 
  Directive, 
  HostListener,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  private toggle: boolean = false;

  @HostListener('click') clickHandler():void {
    this.toggle = !this.toggle;

    if (this.toggle) {
      this.elementRef.nativeElement.style.backgroundColor = '#2196F3';
    } else {
      this.elementRef.nativeElement.style.backgroundColor = '#8BC34A';
    }
  }

  constructor(private elementRef: ElementRef) { }

}
