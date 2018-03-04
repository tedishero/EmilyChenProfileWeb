import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ProjectLite, Categories, ContentfulProjectResponse } from '../shared/model';
import { ProjectFilterService } from '../shared/project-filter.service';
import { ProjectService } from '../shared/project.service';
import { ObservableMedia } from '@angular/flex-layout';
import { ActivatedRoute } from '@angular/router';

import { ProjectListPageData } from './project-list-page-data';

@Component({
  selector: 'app-gallery',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  public projects: ProjectLite[];
  public projectsMaster: ProjectLite[];

  constructor(
    private projectService: ProjectService,
    private projectFilterService: ProjectFilterService,
    private route: ActivatedRoute) {
  }

  public ngOnInit() {
    let pageData: ProjectListPageData = this.route.snapshot.data['pageData'];

    let collage:  ContentfulProjectResponse[] = pageData.data.fields.collage["en-US"];
    this.projectsMaster = collage.map(c => {
      let proj: ProjectLite = {
        about: c.fields.about["en-US"],
        name: c.fields.folderName["en-US"],
        descriptions: c.fields.partners["en-US"],
        chineseName: c.fields.name["zh"],
        englishName: c.fields.name["en-US"],
        categories: c.fields.categories["en-US"].map(category => {
          return Categories[category.fields.name["en-US"]];
        })
      }

      if (c.fields.youtube) {
        proj.youtube = c.fields.youtube["en-US"];
      }

      if (c.fields.websiteUrl) {
        proj.link = c.fields.websiteUrl["en-US"];
      }
      
      return proj;
    });
    this.projects = this.projectsMaster;
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
