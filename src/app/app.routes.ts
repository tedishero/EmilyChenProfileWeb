import { Routes, RouterModule } from '@angular/router';
import {
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectResolver } from './project/index';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full'
    },
    {
        path: 'projects/:name',
        component: ProjectDetailComponent,
        resolve: { project: ProjectResolver }
    },
    {
        path: 'projects',
        component: ProjectListComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: false });
