import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { ChildAService } from 'src/app/child-a/child-a.service';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
    private childAService: ChildAService
  ) {}

  ngOnInit() {
    this.sharedService.data.next('Setting from B');
    this.childAService.data.next('Setting form B');
  }
}
