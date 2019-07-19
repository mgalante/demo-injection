import { Component, OnInit } from '@angular/core';
import { ChildAService } from './child-a/child-a.service';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
    private childAService: ChildAService
  ) {}

  ngOnInit() {
    this.sharedService.data.next('Setting from AppComponent');
    this.childAService.data.next('Setting form AppComponent');
  }
}
