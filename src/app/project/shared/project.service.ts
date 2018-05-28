import { Injectable, PLATFORM_ID, Inject } from "@angular/core";
import { TransferState, makeStateKey } from "@angular/platform-browser";
import { isPlatformServer } from "@angular/common";

import {
  Categories,
  ProjectLite,
  ContentfulCollageResponse,
  ContentfulProjectResponse
} from "./model";
import { createClient, ContentfulClientApi, EntryCollection } from "contentful";
import { Observable, from, of } from "rxjs";
import { share, map, tap } from "rxjs/operators";
import { environment } from "../../../environments/environment";

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
    let resultKey = makeStateKey<string>("all-projects");
    let res: Observable<any[]>;

    if (this.tstate.hasKey(resultKey)) {
      res = of(this.tstate.get<any[]>(resultKey, null));
    } else if (this.isServer) {
      this.tstate.onSerialize(resultKey, () => this.result);
      let contentfulPromise: Promise<
        EntryCollection<any>
      > = this.client.getEntries({
        content_type: "collage",
        select: "fields.collage",
        include: 3,
        locale: "*"
      });

      res = from(contentfulPromise).pipe(
        map(data => data.items),
        tap(result => (this.result = result)),
        share()
      );
    } else {
      let contentfulPromise: Promise<
        EntryCollection<any>
      > = this.client.getEntries({
        content_type: "collage",
        select: "fields.collage",
        include: 3,
        locale: "*"
      });

      res = from(contentfulPromise).pipe(
        map(data => data.items),
        tap(result => (this.result = result)),
        share()
      );
    }

    res.subscribe(data => {
      this.collages = data;
    });

    return res;
  }

  get(name: string): Observable<any> {
    if (this.collages) {
      let projects: ContentfulProjectResponse[] = this.collages[0].fields
        .collage["en-US"];
      let result = undefined;
      for (var j = 0; j < projects.length; j++) {
        if (projects[j].fields.folderName["en-US"] === name) {
          result = projects[j];
          break;
        }
      }
      return of(result);
    }
  }

  query(): Observable<any> {
    return of(this.collages);
  }
}
