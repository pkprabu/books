import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results.component';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  {path: '', component: SearchResultsComponent}
];


@NgModule({
  declarations: [SearchResultsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class SearchResultsModule { }
