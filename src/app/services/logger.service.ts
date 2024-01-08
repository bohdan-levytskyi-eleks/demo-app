import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Logg {
  devider: boolean; 
  logg: string;
  count?: number;
}

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  loggs: BehaviorSubject<Logg[]> = new BehaviorSubject<Logg[]>([]);

  constructor() { }

  addLogg(logg: Logg) {
    this.loggs.next([...this.loggs.value, logg]);
  }

  addDevider() {
    this.loggs.next([...this.loggs.value, {logg: '', devider: true}]);
  }
}
