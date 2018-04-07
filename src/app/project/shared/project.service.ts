import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

import { Categories, ProjectLite, ContentfulCollageResponse, ContentfulProjectResponse } from './model';
import { createClient, ContentfulClientApi, EntryCollection } from 'contentful';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProjectService {
  private isServer: boolean;
  private result: any;

  private collages: any[];
  private client: ContentfulClientApi;

  constructor(private tstate: TransferState, @Inject(PLATFORM_ID) platformId) {
    this.isServer = isPlatformServer(platformId);

    this.client = createClient({
      space: environment.spaceId,
      accessToken: environment.acessKey
    });
  }

  public init(): Observable<any> {
    let resultKey = makeStateKey<string>('all-projects');
    let res: Observable<any[]>;

    if (this.tstate.hasKey(resultKey)) {
      console.log('fetching data from state store');
      res = Observable.of(this.tstate.get<any[]>(resultKey, null));

    } else if (this.isServer) {
      console.log('fetching data on server side');
      this.tstate.onSerialize(resultKey, () => this.result);
      let contentfulPromise: Promise<EntryCollection<any>> = this.client.getEntries({
        content_type: 'collage',
        select: 'fields.collage',
        include: 3,
        locale: '*'
      });
  
      res = Observable.fromPromise(contentfulPromise).map(data => data.items).do(result => this.result = result).share();
    } 

    res.subscribe(data => {
      this.collages = data;
    });

    return res;
  }

  get(name: string): Observable<any> {
    if (this.collages) {
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
  }

  query(): Observable<any> {
    return Observable.of(this.collages);
  }
}
