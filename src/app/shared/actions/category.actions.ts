import { Categories } from '../../project/shared/model';

export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const SELECT_CATEGORY_SUCCESS = 'SELECT_CATEGORY_SUCCESS';

export class SelectCategoryAction {
	readonly type = SELECT_CATEGORY;
	constructor(payload: Categories) {}
}

export class SelectCategorySuccessAction {
	readonly type = SELECT_CATEGORY_SUCCESS;
	constructor(public payload: any[]) {}
}
