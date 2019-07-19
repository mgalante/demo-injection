import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { ChildAService } from '../child-a.service';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
    private childAService: ChildAService
  ) {}

  ngOnInit() {
    this.sharedService.data.next('Setting from A');
    this.childAService.data.next('Setting form A');
  }
}
