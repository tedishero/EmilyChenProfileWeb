import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

@Component({
    selector: 'lazy-load-imaget',
    templateUrl: './lazy-load-image.component.html',
    styleUrls: ['./lazy-load-image.component.scss']
})
export class LazyLoadImageComponent implements OnInit {
    @Input() placeHolder: string;
    @Input() source: string;

    constructor() {
    }

    public ngOnInit() {
    }
}
