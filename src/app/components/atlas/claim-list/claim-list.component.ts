import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-list',
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.css'],
})
export class ClaimListComponent {
  constructor(private router: Router) {}
  claimClick(claimNo: any) {
    this.router.navigate(['atlas/claimOverview', claimNo]);
  }
}
