import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Categories, Navigation } from '../project/shared/model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-navbar-mobile',
	templateUrl: './navbar-mobile.component.html',
	styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent implements OnInit {
	@Output() navItemSelected: EventEmitter<any> = new EventEmitter();
	@Input() navigationItems: Navigation;
	constructor(private router: Router) {}

	ngOnInit() {}

	filter(category: Categories) {
		this.logNavigation(category);
		this.navigateToPage(category);
		this.navItemSelected.emit();
	}

	logNavigation(category: Categories) {
		ga('send', {
			hitType: 'event',
			eventCategory: 'Navigation - Mobile',
			eventAction: 'Click',
			eventLabel: category
		});
	}

	navigateToPage(category: Categories) {
		if (category === Categories.Contact) {
			this.router.navigate(['/contact']);
		} else {
			this.router.navigate(['/projects'], { queryParams: { category: category } });
		}
	}
}
