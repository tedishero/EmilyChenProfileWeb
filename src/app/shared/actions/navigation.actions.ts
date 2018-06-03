import { Navigation } from '../../project/shared/model';

export const LOAD_NAVIGATIONS = 'LOAD_NAIVGATIONS';
export const LOAD_NAVIGATIONS_SUCCESS = 'LOAD_NAVIGATIONS_SUCCESS';

export class LoadNavigationAction {
	readonly type = LOAD_NAVIGATIONS;
	constructor() {}
}

export class LoadNavigationSuccessAction {
	readonly type = LOAD_NAVIGATIONS_SUCCESS;
	constructor(public payload: Navigation[]) {}
}

export type Action = LoadNavigationAction | LoadNavigationSuccessAction;
