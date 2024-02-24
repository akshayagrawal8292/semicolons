import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-claim-overview',
  templateUrl: './claim-overview.component.html',
  styleUrls: ['./claim-overview.component.css'],
})
export class ClaimOverviewComponent {
  claimNo: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((event: any) => {
      this.claimNo = event.id;
    });
  }
}
