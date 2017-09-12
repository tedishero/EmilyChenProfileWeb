import { Component, Input } from '@angular/core';
import { Categories, Navigation } from '../project/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.css']
})
export class NavbarMobileComponent {
  @Input() navigationItems: Navigation;

  constructor(private router: Router) { }

  filter(category: Categories) {
    if (category === Categories.Contact) {
      this.router.navigate(['/contact']);
    } else {
      this.router.navigate(['/projects', { category: category }]);
    }
  }
}
