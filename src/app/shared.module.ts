import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlPipe } from './custom-pipes/url.pipe';
import { StarPipe } from './custom-pipes/star.pipe';



@NgModule({
  declarations: [UrlPipe, StarPipe],
  imports: [
    CommonModule
  ],
  exports: [UrlPipe, StarPipe]
})
export class SharedModule { }
