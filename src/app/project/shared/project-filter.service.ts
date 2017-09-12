import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Categories } from '../index';
import { AppInsightsService } from '@markpieszak/ng-application-insights';

@Injectable()
export class ProjectFilterService {
  private onFilterChanged: EventEmitter<Categories> = new EventEmitter<Categories>();
  constructor(
    private appInsightsService: AppInsightsService,
    private router: Router) { }

  filter(category: Categories) {
    this.appInsightsService.trackEvent('Filter Type: ' + category.toString())
    this.onFilterChanged.emit(category);
  }

  filterChanged(): Observable<Categories> {
    return this.onFilterChanged.asObservable();
  }

}
