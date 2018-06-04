import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as projectActions from '../actions/project.actions';
import { switchMap, map } from 'rxjs/operators';
import { from } from 'rxjs';
import { createClient, ContentfulClientApi, EntryCollection } from 'contentful';
import { environment } from '../../../environments/environment';
import { ContentfulProjectResponse, ProjectLite } from '../../project/shared/model';

@Injectable()
export class ProjectEffects {
	private client: ContentfulClientApi;
	constructor(private actions$: Actions) {
		this.client = createClient({
			space: environment.spaceId,
			accessToken: environment.acessKey
		});
	}

	//const projects: ContentfulProjectResponse[] = this.collages[0].fields.collage['en-US'];
	@Effect()
	projectNavigations$ = this.actions$.ofType(projectActions.LOAD_PROJECTS).pipe(
		switchMap(() => {
			const contentfulPromise: Promise<EntryCollection<any>> = this.client.getEntries({
				content_type: 'collage',
				select: 'fields.collage',
				include: 3,
				locale: '*'
			});
			const res = from(contentfulPromise).pipe(
				map(data => {
					const collage: ContentfulProjectResponse[] = data.items[0].fields.collage['en-US'];
					const projectsMaster = collage.map(c => {
						const proj: ProjectLite = {
							about: c.fields.about['en-US'],
							name: c.fields.folderName['en-US'],
							descriptions: c.fields.partners['en-US'],
							chineseName: c.fields.name['zh'],
							englishName: c.fields.name['en-US'],
							categories: c.fields.categories['en-US'].map(category => {
								return category[category.fields.name['en-US']];
							}),
							images: c.fields.images['en-US'].map(img => {
								return {
									url: img.fields.file['en-US'].url,
									width: img.fields.file['en-US'].details.image.width,
									height: img.fields.file['en-US'].details.image.height,
									title: img.fields.title['en-US'],
									fileName: img.fields.file['en-US'].fileName
								};
							}),
							image: {
								url: c.fields.image['en-US'].fields.file['en-US'].url,
								width: c.fields.image['en-US'].fields.file['en-US'].details.image.width,
								height: c.fields.image['en-US'].fields.file['en-US'].details.image.height,
								title: c.fields.image['en-US'].fields.title['en-US'],
								fileName: c.fields.image['en-US'].fields.file['en-US'].fileName
							}
						};
						return proj;
					});

					return new projectActions.LoadProjectsSuccessAction(projectsMaster);
				})
			);
			return res;
		})
	);
}
