import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlPipe } from './custom-pipes/url.pipe';
import { StarPipe } from './custom-pipes/star.pipe';
import { CustomTitlePipe } from './custom-pipes/custom-title.pipe';



@NgModule({
  declarations: [UrlPipe, StarPipe, CustomTitlePipe],
  imports: [
    CommonModule
  ],
  exports: [UrlPipe, StarPipe, CustomTitlePipe]
})
export class SharedModule { }
