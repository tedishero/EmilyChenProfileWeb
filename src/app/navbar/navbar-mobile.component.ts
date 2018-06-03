import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Categories, Navigation } from '../project/shared/model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../shared/models/app-state';
import * as navigationActions from '../shared/actions/navigation.actions';

@Component({
	selector: 'app-navbar-mobile',
	templateUrl: './navbar-mobile.component.html',
	styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent implements OnInit {
	public navigations$: Observable<Navigation[]>;
	@Output() navItemSelected: EventEmitter<any> = new EventEmitter();

	constructor(private router: Router, private store: Store<AppState>) {
		this.navigations$ = this.store.select(state => state.navigations);
	}

	ngOnInit() {
		this.getNavigations();
	}

	filter(category: Categories) {
		this.logNavigation(category);
		this.navigateToPage(category);
		this.navItemSelected.emit();
	}

	getNavigations() {
		this.store.dispatch(new navigationActions.LoadNavigationAction());
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
