import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ChildAModule } from './child-a/child-a.module';
import { ChildBModule } from './child-b/child-b.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ChildAModule,
    ChildBModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
