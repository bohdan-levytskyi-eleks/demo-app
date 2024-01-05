import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) { }

  onBack() {
    this.router.navigate(['..'], {
      relativeTo: this.route
    });
  }
}
