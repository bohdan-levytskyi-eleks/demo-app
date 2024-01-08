import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LoggerService } from 'src/app/services/logger.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-chiled',
  templateUrl: './chiled.component.html',
  styleUrls: ['./chiled.component.scss']
})
export class ChiledComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  
  constructor(
    private readonly sharedService: SharedService,
    private readonly loggerService: LoggerService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loggerService.addLogg({logg: 'child-init', devider: false})
    this.sharedService.sharedSubject.pipe(takeUntil(this.destroy$)).subscribe((res: string) => {
      this.loggerService.addLogg({logg: res, devider: false})
    })
  }

  onBack() {
    this.router.navigate(['..'], {
      relativeTo: this.route
    });
  }

  ngOnDestroy(): void {
    this.loggerService.addLogg({logg: 'child-destroy', devider: true})
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
