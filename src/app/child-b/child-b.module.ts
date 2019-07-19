import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildBComponent } from './child-b/child-b.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ChildBComponent],
  exports: [
    ChildBComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ChildBModule { }
