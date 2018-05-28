import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ProjectListPageData } from './project-list-page-data';
import { Observable, of, zip } from 'rxjs';
import { ProjectService } from '../shared/project.service';

@Injectable()
export class ProjectListPageDataResolver implements Resolve<ProjectListPageData> {
  constructor(private ps: ProjectService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<ProjectListPageData> {
    return zip(this.ps.query(), projects => {
      return {
        data: projects[0]
      };
    });
  }
}
