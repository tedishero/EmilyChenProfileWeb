import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[webpImg]'
})
export class WebpImgDirective implements OnInit {
  @Input() webpSrc: string;
  @Input() defaultSrc: string;

  constructor(private el: ElementRef) { }

  public ngOnInit() {
    // if code is at server level, the window obj will be null and default to supportWebP.
    let supportWebP = !window || (<any>window).supportsWebP === true
    if (supportWebP) {
      this.el.nativeElement.setAttribute('src', this.webpSrc);
    }
    else {
      this.el.nativeElement.setAttribute('src', this.defaultSrc);
    }
  }

}
