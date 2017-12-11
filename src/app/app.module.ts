import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatListModule, MatSidenavModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AppComponent } from './app.component';
import { NavbarComponent, NavbarMobileComponent } from './navbar/index';
import { MetaModule } from '@ngx-meta/core';
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
    MatButtonModule, 
    MatListModule, 
    MatSidenavModule, 
    MatToolbarModule,
    MatIconModule,
    LazyLoadImageModule,
    FlexLayoutModule,
    MetaModule.forRoot(),
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
