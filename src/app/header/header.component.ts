import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter<any>();

  /* Emits a signle indicating the hamburger menu has been toggled */
  toggleMenu() {
    this.menuToggled.emit();
  }

  /**
   * Returns the proper logo image src based on the support of WebP technology
   */
  logoImgSrc() {
    const supportWebP = typeof window === 'undefined' || (<any>window).supportsWebP;
    if (supportWebP) {
      return 'assets/index_name.webp';
    } else {
      return 'assets/index_name.png';
    }
  }
}
