import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { ProjectDetailPageData } from "./project-detail-page.data";
import { Observable, of, zip } from "rxjs";
import { ProjectService } from "../shared/project.service";

@Injectable()
export class ProjectDetailPageDataResolver
  implements Resolve<ProjectDetailPageData> {
  constructor(private ps: ProjectService) {}

  public resolve(
    route: ActivatedRouteSnapshot
  ): Observable<ProjectDetailPageData> {
    var projectName = route.params["name"];
    let res: Observable<ProjectDetailPageData> = zip(
      this.ps.get(projectName),
      (projects: any) => {
        return {
          data: projects
        };
      }
    );

    return res;
  }
}
