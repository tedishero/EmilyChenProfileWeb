import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProjectLite } from '../shared/model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './project-thumbnail.component.html',
  styleUrls: ['./project-thumbnail.component.css'],
  animations: [
    trigger('thumbTrigger', [
      state(
        'onThumb',
        style({
          opacity: '0.33'
        })
      ),
      state(
        'offThumb',
        style({
          opacity: '1'
        })
      ),
      transition('offThumb <=> onThumb', animate('500ms 0s ease-out'))
    ])
  ]
})
export class ProjectThumbnailComponent implements OnInit {
  state = 'offThumb';
  imageSrc: string;
  title: string;
  defaultIndexImage: string;
  webPIndexImage: string;

  @Input() project: ProjectLite;

  constructor(private router: Router) {}

  public ngOnInit() {
    const supportWebP = typeof window === 'undefined' || (<any>window).supportsWebP;
    if (supportWebP) {
      this.imageSrc = `${environment.assetUrl}/assets/projects/${this.project.name}/index.webp`;
    } else {
      this.imageSrc = `https:${this.project.image.url}`;
    }
  }

  public mouseOver() {
    this.state = 'onThumb';
  }

  public mouseLeave() {
    this.state = 'offThumb';
  }

  public onProjectImgClicked() {
    if (ga) {
      ga('send', {
        hitType: 'event',
        eventCategory: 'Project Image',
        eventAction: 'Select',
        eventLabel: `Project [${this.project.chineseName}] Selected`
      });
    }
  }
}
