import { Component, OnInit } from '@angular/core';
import { Navigation, Categories } from './project/shared/model';
import { Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	breadcrumbJson = {
		'@context': 'http://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: []
	};
	logoJson = {
		'@context': 'http://schema.org',
		'@type': 'Organization',
		url: 'https://www.emilygph.com',
		logo: 'https://www.emilygph.com/assets/index_name.png'
	};
	socialJson = {
		'@context': 'http://schema.org',
		'@type': 'Person',
		name: 'Emily Chen',
		url: 'https://www.emilygph.com',
		sameAs: ['https://www.facebook.com/yiyun.chen2', 'https://www.linkedin.com/in/emily-chen-8a31b6112/']
	};
	navItems: Navigation[] = [
		{
			name: 'All',
			filter: Categories.All
		},
		{
			name: 'Editorial',
			filter: Categories.Editorial
		},
		{
			name: 'Exhibition',
			filter: Categories.Exhibition
		},
		{
			name: 'Graphic',
			filter: Categories.Graphic
		},
		{
			name: 'Identity',
			filter: Categories.Identity
		},
		{
			name: 'Package',
			filter: Categories.Package
		},
		{
			name: 'Contact',
			filter: Categories.Contact
		}
	];
	private ham: any;

	constructor(private router: Router) {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd && typeof ga !== 'undefined') {
				ga('set', 'page', event.urlAfterRedirects);
				ga('send', 'pageview');
			}
		});
	}

	public ngOnInit() {
		for (let i = 0; i < this.navItems.length; i++) {
			this.breadcrumbJson.itemListElement.push({
				'@type': 'ListItem',
				position: i + 1,
				name: this.navItems[i].name,
				item: 'https://www.emilygph.com/projects?category=' + i
			});
		}

		if (typeof document !== 'undefined') {
			this.ham = document.querySelector('#hamburger');
		}
	}

	public onOpenStart() {
		if (this.ham) {
			this.ham.classList.add('is-active');
		}
	}

	public onCloseStart() {
		if (this.ham) {
			this.ham.classList.remove('is-active');
		}
	}
}
