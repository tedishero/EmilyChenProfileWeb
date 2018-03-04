import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebpImgDirective } from './webp-img.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        WebpImgDirective,
    ],
    exports: [
        WebpImgDirective
    ]
})
export class WebPImgModule { }