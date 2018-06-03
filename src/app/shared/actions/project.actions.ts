import { ProjectLite } from '../../project/shared/model';

export const LOAD_PROJECTS = 'LOAD_PROJECTS';
export const LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS';

export class LoadProjectsAction {
	readonly type = LOAD_PROJECTS;
	constructor() {}
}

export class LoadProjectsSuccessAction {
	readonly type = LOAD_PROJECTS_SUCCESS;
	constructor(public payload: ProjectLite[]) {}
}
