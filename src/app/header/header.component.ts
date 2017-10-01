import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuToggled = new EventEmitter<boolean>();

  private mobileMenuShown: boolean;

  constructor(public media: ObservableMedia, ) {
  }


  ngOnInit() {
  }

  toggleMenu() {
    this.mobileMenuShown = !this.mobileMenuShown;
    this.menuToggled.emit(this.mobileMenuShown);
  }
}
