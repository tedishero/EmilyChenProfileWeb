// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material';
import { appRoutes } from './app.routes';

// Componets
import { AppComponent } from './app.component';
import { NavbarMobileComponent } from './navbar/navbar-mobile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { WebpImageDirective } from './shared/directives/webp-image.directive';

// Services
import { ProjectFilterService } from './project/shared/project-filter.service';

// General
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ContactComponent,
		NavbarMobileComponent,
		NavbarComponent,
		WebpImageDirective
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'my-app' }),
		BrowserTransferStateModule,
		// environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
		BrowserAnimationsModule,
		MatSidenavModule,
		HttpClientModule,
		FlexLayoutModule,
		appRoutes
	],
	providers: [ProjectFilterService],
	bootstrap: [AppComponent]
})
export class AppModule {}
