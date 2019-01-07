import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[rsIntroButtonHighlight]'
})
export class IntroButtonHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.borderColor') borderColor: string;
  private icon: any;
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.icon = this.elRef.nativeElement.querySelector('i')
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.icon.style.transform = "rotate(90deg)";
    this.backgroundColor = '#04C2C9';
    this.borderColor = '#04C2C9';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.icon.style.transform = "rotate(0deg)";
    this.backgroundColor = null;
    this.borderColor = '#fff';
  }

}
