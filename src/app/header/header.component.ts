import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuToggled = new EventEmitter<boolean>();

  public mobileMenuShown: boolean;

  constructor() {
  }


  ngOnInit() {
  }

  toggleMenu() {
    this.mobileMenuShown = !this.mobileMenuShown;
    this.menuToggled.emit(this.mobileMenuShown);
  }
}
