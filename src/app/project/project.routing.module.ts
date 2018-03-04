import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectThumbnailComponent } from './project-list/project-thumbnail.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

import { ProjectListPageDataResolver } from './project-list/project-list-page-data-resolver.service';
import { ProjectDetailPageDataResolver } from './project-detail/project-detail-page-data-resolver.service';

import { CanActivateProject } from './project.can-activate';

const routes: Routes = [
    {
        path: '',
        canActivate: [CanActivateProject],
        component: ProjectListComponent,
        resolve: {
            pageData: ProjectListPageDataResolver
        }
    },
    {
        path: ':name',
        canActivate: [CanActivateProject],
        component: ProjectDetailComponent,
        resolve: { pageData: ProjectDetailPageDataResolver }
    },
]

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)
export class ProjectRouterModule {}