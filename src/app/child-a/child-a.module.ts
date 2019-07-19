import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildAComponent } from './child-a/child-a.component';
import { SharedModule } from '../shared/shared.module';
import { ChildAService } from './child-a.service';

@NgModule({
  declarations: [ChildAComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ChildAComponent
  ],
  providers: [
    ChildAService
  ]
})
export class ChildAModule { }
