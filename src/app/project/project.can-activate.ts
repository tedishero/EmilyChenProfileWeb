import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProjectService } from './shared/project.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class CanActivateProject implements CanActivate {
    private init: boolean;
    constructor(private ps: ProjectService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        if (this.init) {
            return Observable.of(true);
        }
        let obs = this.ps.init().map(x => true);
        obs.subscribe(data => {
            this.init = true;
        })
        return obs;
    }
}