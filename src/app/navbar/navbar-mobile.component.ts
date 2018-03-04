import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Categories, Navigation } from '../project/shared/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent {
  @Input() navigationItems: Navigation;
  @Output() navItemSelected: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }

  filter(category: Categories) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Navigation - Mobile',
      eventAction: 'Click',
      eventLabel: category
    });
    if (category === Categories.Contact) {
      this.router.navigate(['/contact']);
    } else {
      this.router.navigate(['/projects'], { queryParams: { category: category } });
    }

    this.navItemSelected.emit();
  }
}
