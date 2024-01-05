import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, timer } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  constructor(
    private readonly router: Router, 
    private readonly route: ActivatedRoute,
    private readonly sharedService: SharedService
    ) { }

  redirect() {
    const random = Math.random();
    interval(5000).subscribe((res: any) => {
      this.sharedService.sharedSubject.next(random);
    })

    this.router.navigate(['chiled'], {
      relativeTo: this.route
    });
  }
}
