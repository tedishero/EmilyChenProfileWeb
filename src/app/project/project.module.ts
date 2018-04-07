import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadImageModule } from 'ng-lazyload-image';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectThumbnailComponent } from './project-list/project-thumbnail.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

import { ProjectService } from './shared/project.service';
import { ProjectListPageDataResolver } from './project-list/project-list-page-data-resolver.service';
import { ProjectDetailPageDataResolver } from './project-detail/project-detail-page-data-resolver.service';
import { CanActivateProject } from './project.can-activate';

import { ProjectRouterModule } from './project.routing.module';

import { SafeResourceUrl } from '../shared/pipes/safeResourceUrl.pipe';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        ProjectRouterModule,
        LazyLoadImageModule,
        FlexLayoutModule,
    ],
    declarations: [
        ProjectListComponent,
        ProjectThumbnailComponent,
        ProjectDetailComponent,
        SafeResourceUrl
    ],
    providers: [
        ProjectDetailPageDataResolver,
        ProjectListPageDataResolver,
        ProjectService,
        CanActivateProject
    ]
})
export class ProjectModule { }