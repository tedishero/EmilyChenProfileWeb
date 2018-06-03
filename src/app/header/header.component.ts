import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	@Output() menuToggled = new EventEmitter<any>();

	/* Emits a signle indicating the hamburger menu has been toggled */
	toggleMenu() {
		this.menuToggled.emit();
	}
}
