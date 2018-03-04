import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full'
    },
    {
        path: 'projects',
        loadChildren: './project/project.module#ProjectModule',
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: false, initialNavigation: 'enabled' });
