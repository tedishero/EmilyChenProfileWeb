import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { ProjectService } from '../index'

@Injectable()
export class ProjectResolver implements Resolve<any> {
    constructor(private projectService: ProjectService) { }
    resolve(route: ActivatedRouteSnapshot) {
        var projectName = route.params['name'];
        if (projectName) {
            return this.projectService.get(projectName);
        }
        else {
            return undefined;
        }
    }
}
