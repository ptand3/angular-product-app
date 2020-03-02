import { Directive, OnInit, OnDestroy, ElementRef, HostListener, Renderer2, Input } from '@angular/core';


//h2 , div that contains directive is 
//knowm as host element that host the directive
@Directive({

  //[] -must , represent a property
  //used at any tag/component
  selector: '[appHighlight]',
  exportAs : 'appHighlight' //for #myDir ="appHighlight"
})
export class HighlightDirective implements OnInit, OnDestroy {

  @Input("appHighlight")
  color: string = "lightgreen";
  //constructor is injected with the host
  //elment elementRef(wrapper for DOM)
  constructor(private hostElement: ElementRef, private renderer: Renderer2) {
    console.log("HighLightDirective created");
  }

  ngOnInit() {
    console.log("HighLightDirective init");
    console.log("host tag", this.hostElement.nativeElement.tagName);
  }
  ngOnDestroy() {
    console.log("HighLightDirective destroy");
  }

  @HostListener('click')
  clicked() {
    console.log("click event");
  }

  @HostListener('mouseenter')
  mouseEnter() {
    this.renderer.setStyle(this.hostElement.nativeElement, 'background', this.color);
  }
  @HostListener('mouseleave')
  mouseLeave() {
    this.renderer.removeStyle(this.hostElement.nativeElement, 'background');
  }
}
