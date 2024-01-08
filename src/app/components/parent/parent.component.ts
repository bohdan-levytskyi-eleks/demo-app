import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, interval, takeUntil, timer } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnDestroy {
  destroy$ = new Subject();

  constructor(
    private readonly router: Router, 
    private readonly route: ActivatedRoute,
    private readonly sharedService: SharedService
    ) { }

  redirect() {
    const id = Math.random().toString(16).slice(2);
    interval(1000).subscribe(() => {
      this.sharedService.sharedSubject.next(id);
    })

    this.router.navigate(['chiled'], {
      relativeTo: this.route
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
