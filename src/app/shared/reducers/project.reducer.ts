import * as projectNavigations from '../actions/project.actions';

export function projectReducer(state = [], action: projectNavigations.Action) {
	switch (action.type) {
		case projectNavigations.LOAD_PROJECTS_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}
