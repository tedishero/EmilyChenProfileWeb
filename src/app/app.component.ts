import { Component } from '@angular/core';
import { Navigation, Categories } from './project/index';
import { GoogleAnalyticsEventsService } from './google-analytic/google-analytic.service';
import { ObservableMedia } from "@angular/flex-layout";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public mobileMenuVisible: boolean;

  constructor(public media: ObservableMedia, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  public onMenuToggled($event: boolean) {
    this.mobileMenuVisible = $event;
  }

  navItems: Navigation[] = [
    {
      name: "All",
      filter: Categories.All
    },
    {
      name: "Editorial",
      filter: Categories.Editorial
    },
    {
      name: "Exhibition",
      filter: Categories.Exhibition
    },
    {
      name: "Graphic",
      filter: Categories.Graphic
    },
    {
      name: "Identity",
      filter: Categories.Identity
    },
    {
      name: "Package",
      filter: Categories.Package
    },
    {
      name: 'Contact',
      filter: Categories.Contact
    }
  ]
}
