import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { ProjectService } from '../index'

@Injectable()
export class ProjectResolver implements Resolve<any> {
    constructor(private projectService: ProjectService) { }
    resolve(route: ActivatedRouteSnapshot) {
        var projectId = +route.params['id'];
        if (!isNaN(projectId)) {
            return this.projectService.get(projectId);
        }
        else {
            return undefined;
        }
    }
}
