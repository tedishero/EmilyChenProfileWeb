import { Injectable } from '@angular/core';
import { Action } from '../actions/navigation.actions';
import { Effect, Actions } from '@ngrx/effects';
import * as navigationActions from '../actions/navigation.actions';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Categories } from '../../project/shared/model';
@Injectable()
export class NavigationEffects {
	constructor(private actions$: Actions) {}

	@Effect()
	loadNavigations$ = this.actions$.ofType(navigationActions.LOAD_NAVIGATIONS).pipe(
		switchMap(() =>
			of(
				new navigationActions.LoadNavigationSuccessAction([
					{
						name: 'All',
						filter: Categories.All
					},
					{
						name: 'Editorial',
						filter: Categories.Editorial
					},
					{
						name: 'Exhibition',
						filter: Categories.Exhibition
					},
					{
						name: 'Graphic',
						filter: Categories.Graphic
					},
					{
						name: 'Identity',
						filter: Categories.Identity
					},
					{
						name: 'Package',
						filter: Categories.Package
					},
					{
						name: 'Contact',
						filter: Categories.Contact
					}
				])
			)
		)
	);
}
