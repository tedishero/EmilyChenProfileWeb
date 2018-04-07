import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProjectDetailPageData } from './project-detail-page.data'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/do';
import { ProjectService } from '../shared/project.service';

@Injectable()
export class ProjectDetailPageDataResolver implements Resolve<ProjectDetailPageData> {
    constructor(private ps: ProjectService) {
    }

    public resolve(route: ActivatedRouteSnapshot): Observable<ProjectDetailPageData> {
        var projectName = route.params['name'];
        let res: Observable<ProjectDetailPageData> = Observable.zip(this.ps.get(projectName),
        function (projects) {
            return {
                data: projects
            }
        });

        return res;
    }
}