import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
	selector: '[webpImage]'
})
export class WebpImageDirective implements OnInit {
	constructor(private el: ElementRef) {}

	@Input() defaultSrc: string;
	@Input() webpSrc: string;

	/**
	 * If the browser supports webP then use webp image src else default image src.
	 */
	ngOnInit() {
		const supportWebP = typeof window === 'undefined' || (<any>window).supportsWebP;
		if (supportWebP) {
			this.el.nativeElement.src = this.webpSrc;
		} else {
			this.el.nativeElement.src = this.defaultSrc;
		}
	}
}
