import { Component } from '@angular/core';
import { Navigation, Categories } from './project/index';
import { ObservableMedia } from "@angular/flex-layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   *
   */
  constructor(public media: ObservableMedia) {
    console.info('app started');
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
