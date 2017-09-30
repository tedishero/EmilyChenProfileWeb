import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ShareModule } from 'ng2share/share.module'
import { AppComponent } from './app.component';
import { NavbarComponent, NavbarMobileComponent } from './navbar/index';

import { appRoutes, appRoutingProviders } from './app.routes';

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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectThumbnailComponent,
    ProjectListComponent,
    HeaderComponent,
    ProjectDetailComponent,
    NavbarMobileComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ShareModule,
    LazyLoadImageModule,
    FlexLayoutModule,
    appRoutes
  ],
  providers: [
    ProjectService,
    ProjectFilterService,
    ProjectResolver,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
