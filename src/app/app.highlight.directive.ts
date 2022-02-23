import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string;
    constructor(private el: ElementRef) {}
    @HostListener('mouseenter') onMouseEnter() {
      this.setColor()
    }
    @HostListener('mouseleave') onMouseLeave() {
      this.removeColor();
    }
    setColor(): void {
      this.el.nativeElement.style.backgroundColor = this.highlightColor
    }
    removeColor(): void {
      this.el.nativeElement.style.backgroundColor = null
    }
}