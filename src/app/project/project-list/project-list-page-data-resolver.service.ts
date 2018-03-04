import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { isPlatformServer } from '@angular/common';
import { ProjectListPageData } from './project-list-page-data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/do';
import { ProjectService } from '../shared/project.service';

@Injectable()
export class ProjectListPageDataResolver implements Resolve<ProjectListPageData> {
    private isServer: boolean;
    private result: any;

    constructor(private ps: ProjectService, private router: Router, private tstate: TransferState, @Inject(PLATFORM_ID) platformId) {
        this.isServer = isPlatformServer(platformId);
    }

    public resolve(route: ActivatedRouteSnapshot): Observable<ProjectListPageData> {
        let resultKey = makeStateKey<string>('project-list-page-data');
        let res: Observable<ProjectListPageData>;

        if (this.tstate.hasKey(resultKey)) {
            res = Observable.of(this.tstate.get<ProjectListPageData>(resultKey, null));
        } else if (this.isServer) {
            this.tstate.onSerialize(resultKey, () => this.result);
            res = Observable.zip(this.ps.query(),
                function (projects) {
                    return {
                        data: projects[0]
                    }
                }).do(result => this.result = result);
        } else {
            res = Observable.zip(this.ps.query(),
                function (projects) {
                    return {
                        data: projects[0]
                    }
                });
        }

        res.subscribe(() => { }, err => { this.router.navigate(['**']) });

        return res;
    }
}