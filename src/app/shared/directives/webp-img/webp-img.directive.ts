import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[webpImg]'
})
export class WebpImgDirective implements OnInit {
  @Input() webpSrc: string;
  @Input() defaultSrc: string;

  constructor(private el: ElementRef) { }

  public ngOnInit() {
    // if code is at server level, set supportWebP to false
    let supportWebP = typeof(window) !== "undefined" && (<any>window).supportsWebP;
    if (supportWebP) {
      this.el.nativeElement.setAttribute('src', this.webpSrc);
    }
    else {
      this.el.nativeElement.setAttribute('src', this.defaultSrc);
    }
  }

}
