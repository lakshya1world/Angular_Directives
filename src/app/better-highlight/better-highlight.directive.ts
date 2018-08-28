import { 
  Directive,
  Renderer2, 
  ElementRef, 
  OnInit, 
  HostListener, 
  HostBinding,
  Input
 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'yellow';

  @HostBinding('style.backgroundColor') backgroundcolor: string;

  constructor(private elRef: ElementRef,  private renderer : Renderer2) { }
  
  ngOnInit()
  {
    this.backgroundcolor =  this.defaultColor;
    //this.renderer.setStyle(this.elRef.nativeElement,  'background-color', 'blue')
  }
  
 

  @HostListener('mouseenter') mouseover(eventData:  Event)
  {
    //this.renderer.setStyle(this.elRef.nativeElement,  'background-color', 'blue');
    this.backgroundcolor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData:  Event)
  {
    //this.renderer.setStyle(this.elRef.nativeElement,  'background-color', 'transparent');
    this.backgroundcolor = this.defaultColor;

  }

}
