import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sharedSubject: Subject<any> = new Subject<any>();
  count = 0;
  constructor() {}


}
