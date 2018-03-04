import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { isPlatformServer } from '@angular/common';
import { ProjectDetailPageData } from './project-detail-page.data'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/do';
import { ProjectService } from '../shared/project.service';

@Injectable()
export class ProjectDetailPageDataResolver implements Resolve<ProjectDetailPageData> {
    private isServer: boolean;
    private result: any;

    constructor(private ps: ProjectService, private router: Router, private tstate: TransferState, @Inject(PLATFORM_ID) platformId) {
        this.isServer = isPlatformServer(platformId);
    }

    public resolve(route: ActivatedRouteSnapshot): Observable<ProjectDetailPageData> {
        let resultKey = makeStateKey<string>('project-detail-page-data');
        var projectName = route.params['name'];
        let res: Observable<ProjectDetailPageData>;

        if (this.tstate.hasKey(resultKey)) {
            res = Observable.of(this.tstate.get<ProjectDetailPageData>(resultKey, null));
        } else if (this.isServer) {
            this.tstate.onSerialize(resultKey, () => this.result);
            res = Observable.zip(this.ps.get(projectName),
                function (projects) {
                    return {
                        data: projects
                    }
                }).do(result => this.result = result);
        } else {
            res = Observable.zip(this.ps.get(projectName),
                function (projects) {
                    return {
                        data: projects
                    }
                });
        }

        res.subscribe(() => { }, err => { this.router.navigate(['**']) });

        return res;
    }
}