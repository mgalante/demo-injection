import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ChildAService {
  data: BehaviorSubject<string> = new BehaviorSubject<string>('initial');
  constructor() {
    console.log('Constructing ChildA Service');
  }
}
