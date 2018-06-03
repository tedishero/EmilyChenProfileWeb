import * as navigationActions from '../actions/navigation.actions';

export function navigationReducer(state = [], action: navigationActions.Action) {
	switch (action.type) {
		case navigationActions.LOAD_NAVIGATIONS_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}
