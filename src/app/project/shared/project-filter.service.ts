import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Categories } from '../index';

@Injectable()
export class ProjectFilterService {
  private onFilterChanged: EventEmitter<Categories> = new EventEmitter<Categories>();
  constructor(
    private router: Router) { }

  filter(category: Categories) {
    this.onFilterChanged.emit(category);
  }

  filterChanged(): Observable<Categories> {
    return this.onFilterChanged.asObservable();
  }

}
