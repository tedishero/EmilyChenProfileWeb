import { Component, OnInit, Input } from '@angular/core';
import { Categories, Navigation } from '../project/shared/model';
import { ProjectFilterService } from '../project/shared/project-filter.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../shared/models/app-state';
import { Observable } from 'rxjs';

import * as navigationActions from '../shared/actions/navigation.actions';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	public navigations$: Observable<Navigation[]>;
	private activeFilter: Categories;

	constructor(
		private router: Router,
		private projectFilterService: ProjectFilterService,
		private store: Store<AppState>
	) {
		this.navigations$ = this.store.select(state => state.navigations);
	}

	ngOnInit() {
		this.getNavigations();
		this.projectFilterService.filterChanged().subscribe((x: Categories) => {
			this.activeFilter = x;
		});
	}

	getNavigations() {
		this.store.dispatch(new navigationActions.LoadNavigationAction());
	}

	filter(category: Categories) {
		this.logNavigation(category);
		this.navigateToPage(category);
	}

	isActive(category: Categories) {
		return this.activeFilter === category;
	}

	logNavigation(category: Categories) {
		ga('send', {
			hitType: 'event',
			eventCategory: 'Navigation',
			eventAction: 'Click',
			eventLabel: category
		});
	}

	navigateToPage(category: Categories) {
		if (category === Categories.Contact) {
			this.activeFilter = category;
			this.router.navigate(['/contact']);
		} else {
			this.router.navigate(['/projects'], { queryParams: { category: category } });
		}
	}
}
