import { Navigation, ProjectLite } from '../../project/shared/model';

export interface AppState {
	navigations: Navigation[];
	projects: ProjectLite[];
}
