import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProjectService } from './shared/project.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CanActivateProject implements CanActivate {
  private init: boolean;
  constructor(private ps: ProjectService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    if (this.init) {
      return of(true);
    }
    const obs = this.ps.init().pipe(map(x => true));
    obs.subscribe(data => {
      this.init = true;
    });
    return obs;
  }
}
