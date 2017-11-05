import { Component, OnInit, Input } from '@angular/core';
import { Categories, Navigation, ProjectFilterService } from '../project/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() navigationItems: Navigation;
  private activeFilter: Categories;

  constructor(
    private router: Router,
    private projectFilterService: ProjectFilterService) {
  }

  ngOnInit() {
    this.projectFilterService.filterChanged().subscribe((x: Categories) => {
      this.activeFilter = x;
    });
  }

  filter(category: Categories) {
    if (category === Categories.Contact) {
      this.activeFilter = category;
      this.router.navigate(['/contact']);
    } else {
      this.router.navigate(['/projects'], { queryParams: { category: category } });
    }
  }

  isActive(category: Categories) {
    return this.activeFilter === category;
  }

}
