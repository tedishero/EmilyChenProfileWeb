import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { appRoutes } from './app.routes';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatSidenavModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NavbarComponent, NavbarMobileComponent } from './navbar/index';
import { ProjectFilterService } from './project/shared/project-filter.service';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeaderComponent, NavbarMobileComponent, ContactComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    BrowserTransferStateModule,
    // environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    HttpClientModule,
    FlexLayoutModule,
    appRoutes
  ],
  providers: [ProjectFilterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
