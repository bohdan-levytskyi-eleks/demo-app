import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sharedSubject: Subject<string> = new Subject<string>();
  
  constructor() {}


}
