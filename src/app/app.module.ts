import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { appRoutes, appRoutingProviders } from './app.routes';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AppComponent } from './app.component';
import { NavbarComponent, NavbarMobileComponent } from './navbar/index';

import {
  ProjectService,
  ProjectFilterService,
  ProjectResolver,
  ProjectListComponent,
  ProjectThumbnailComponent
} from './project/index';

import { HeaderComponent } from './header/header.component';
import { ProjectDetailComponent } from './project/index';
import { ContactComponent } from './contact/contact.component';

import { WebpImgDirective } from './shared/directives/webp-img/webp-img.directive';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectThumbnailComponent,
    ProjectListComponent,
    HeaderComponent,
    ProjectDetailComponent,
    NavbarMobileComponent,
    ContactComponent,
    WebpImgDirective
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    BrowserAnimationsModule,
    MatListModule, 
    MatSidenavModule, 
    MatToolbarModule,
    LazyLoadImageModule,
    FlexLayoutModule,
    appRoutes
  ],
  providers: [
    ProjectService,
    ProjectFilterService,
    ProjectResolver,
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
