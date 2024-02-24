import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Dialog, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import { SubjectModelComponent } from '../../../subject-model/subject-model.component';
import { PolicywiseService } from 'src/app/services/policywise/policywise.service';
@Component({
  selector: 'app-claim-overview',
  templateUrl: './claim-overview.component.html',
  styleUrls: ['./claim-overview.component.css'],
})
export class ClaimOverviewComponent {
  claimNo: string = '';
  constructor(private route: ActivatedRoute,public dialog:Dialog, private policywiseService: PolicywiseService) {}

  ngOnInit() {
    this.route.params.subscribe((event: any) => {
      this.claimNo = event.id;
    });
  }

  openDialog() {
    // this.dialog.open(SubjectModelComponent);
    const dialogRef = this.dialog.open(SubjectModelComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });
  }
}
