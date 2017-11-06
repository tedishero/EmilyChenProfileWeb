import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ProjectLite } from '../index';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './project-thumbnail.component.html',
  styleUrls: ['./project-thumbnail.component.css'],
  animations: [
    trigger('thumbTrigger', [
      state('onThumb', style({
        opacity: '0.33'
      })),
      state('offThumb', style({
        opacity: '1'
      })),
      transition('offThumb <=> onThumb', animate('500ms 0s ease-out'))

    ])
  ]
})

export class ProjectThumbnailComponent implements OnInit {
  state = 'offThumb';
  imageSrc: string;
  title: string;
  indexImage: string;

  @Input() project: ProjectLite;
  @Input() showTitle: any;

  constructor(
    private router: Router,
    public media: ObservableMedia) {

  }

  public ngOnInit() {
    this.indexImage = `./assets/projects/${this.project.name}/index.png`;
  }

  public mouseOver() {
    this.state = 'onThumb';
  }

  public mouseLeave() {
    this.state = 'offThumb';
  }

  
  public onProjectImgClicked() {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Project Image',
      eventAction: 'Select',
      eventLabel: `Project [${this.project.chineseName}] Selected`
    });
  }


}
