import { Component, OnInit } from '@angular/core';
import { Navigation, Categories } from './project/index';
import { Router, NavigationEnd } from "@angular/router";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private ham: HTMLElement;
  
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  public ngOnInit (){
    this.ham = document.querySelector('#hamburger');
  }

  public onOpenStart() {
    this.ham.classList.add('is-active');
  }

  public onCloseStart() {
    this.ham.classList.remove('is-active');
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
