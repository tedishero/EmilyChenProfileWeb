import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Categories, ProjectLite, ContentfulCollageResponse, ContentfulProjectResponse } from './model';
import { createClient, ContentfulClientApi, EntryCollection } from 'contentful';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProjectService {
  private collages: any[];
  private client: ContentfulClientApi;

  constructor(private http: HttpClient) {
    this.client = createClient({
      space: environment.spaceId,
      accessToken: environment.acessKey
    });
  }

  public init() {
    let contentfulPromise: Promise<EntryCollection<any>> = this.client.getEntries({
      content_type: 'collage',
      select: 'fields.collage',
      include: 3,
      locale: '*'
    });

    let obs = Observable.fromPromise(contentfulPromise).share();
    obs.subscribe((data => {
        this.collages = data.items;
      }));
    return obs.map(() => {return true;});
  }

  get(name: string): Observable<any> {
    let projects: ContentfulProjectResponse[] = this.collages[0].fields.collage["en-US"];
    let result = undefined;
    for (var j = 0; j < projects.length; j++) {
      if (projects[j].fields.folderName["en-US"] === name) {
        result = projects[j];
        break;
      }
    }
    return Observable.of(result);
  }

  query(): Observable<any> {
    return Observable.of(this.collages);
  }
}
