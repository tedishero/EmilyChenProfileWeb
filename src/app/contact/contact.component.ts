import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title) {
    this.setMetaTags();
  }

  private setMetaTags() {
    // sets the title.
    this.title.setTitle('Emily Chen (陳逸芸) | Graphic Designer');

    // sets the description tag
    this.meta.updateTag({
      content: 'Graphic designer based in Taiwan. Focus on graphic design, brand identity design, art and cultural performance.'
    },
      "property='og:description'"
    )

    // sets thumbnail.
    this.meta.updateTag({
      content: 'http://www.emilygph.com/assets/emily.png'
    },
      "property='og:image'"
    )

    this.meta.updateTag({
      content: 'http://www.emilygph.com/assets/emily.png'
    },
      "property='og:image:url'"
    )
  }

  ngOnInit() {
  }

}
