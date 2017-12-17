import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ProjectLite, Categories } from '../shared/model';
import { ProjectFilterService } from '../shared/project-filter.service';
import { ProjectService } from '../shared/project.service';
import { ObservableMedia } from '@angular/flex-layout';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, AfterViewChecked {

  public projects: ProjectLite[];
  public projectsMaster: ProjectLite[];

  constructor(
    private projectService: ProjectService,
    private projectFilterService: ProjectFilterService,
    private route: ActivatedRoute) {
  }

  public ngAfterViewChecked() {
  }

  public ngOnInit() {
    this.projectsMaster = this.projectService.query();
    this.projects = (this.projectsMaster);
    this.route.queryParams.subscribe(params => {
      let category: number = +params['category'];
      if (category > 0) {
        this.projects = this.projectsMaster.filter(x => x.categories.indexOf(category) >= 0);
      } else {
        this.projects = this.projectsMaster;
      }
      this.projectFilterService.filter(category);
    });
  }
}
