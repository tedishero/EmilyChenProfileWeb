import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ProjectLite, Categories, ProjectService, ProjectFilterService } from '../index';
import { ObservableMedia } from '@angular/flex-layout';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, AfterViewChecked {

  private pageName = 'Project-List';
  public projects: ProjectLite[];
  public projectsMaster: ProjectLite[];

  constructor(
    public media: ObservableMedia,
    private projectService: ProjectService,
    private projectFilterService: ProjectFilterService,
    private route: ActivatedRoute) {
  }

  public ngAfterViewChecked() {
  }

  public ngOnInit() {
    this.projectsMaster = this.projectService.query();
    this.projects = (this.projectsMaster);
    this.route.params.subscribe(params => {
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
