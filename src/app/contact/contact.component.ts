import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private metaService: MetaService,
    public media: ObservableMedia,
  ) {
    this.setMetaTags();
  }

  private setMetaTags() {
    // sets the title.
    this.metaService.setTitle('Emily Chen (陳逸芸) | Graphic Designer', true);

    // sets the description tag
    this.metaService.setTag('og:description', 'Graphic designer based in Taiwan. Focus on graphic design, brand identity design, art and cultural performance.');

    // sets thumbnail.
    this.metaService.setTag('og:image', `http://emilygph.com/assets/emily.png`);
  }

  ngOnInit() {
  }

}
