import { Injectable} from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ProjectListPageData } from './project-list-page-data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/zip';
import { ProjectService } from '../shared/project.service';

@Injectable()
export class ProjectListPageDataResolver implements Resolve<ProjectListPageData> {

    constructor(private ps: ProjectService) {
    }

    public resolve(route: ActivatedRouteSnapshot): Observable<ProjectListPageData> {
        let res = Observable.zip(this.ps.query(),
        function (projects) {
            return {
                data: projects[0]
            }
        });
        return res;
    }
}