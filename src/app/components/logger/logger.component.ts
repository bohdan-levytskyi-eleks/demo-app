import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, concat, concatMap, defer, map, takeUntil } from 'rxjs';
import { Logg, LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})

export class LoggerComponent {
  constructor(public readonly loggerService: LoggerService) { }
}
