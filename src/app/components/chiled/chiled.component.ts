import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-chiled',
  templateUrl: './chiled.component.html',
  styleUrls: ['./chiled.component.scss']
})
export class ChiledComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  count = 0;
  
  constructor(private readonly sharedService: SharedService) { }

  ngOnInit(): void {
    console.log('chiled component init', this.count);
    this.sharedService.sharedSubject.pipe(takeUntil(this.destroy$)).subscribe((res: any) => {
      console.log(res, '>> ');
    })
  }

  ngOnDestroy(): void {
    console.log('chiled component destroy', ++this.count);
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
