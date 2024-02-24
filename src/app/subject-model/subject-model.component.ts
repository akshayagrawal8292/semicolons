import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PolicywiseService } from 'src/app/services/policywise/policywise.service';

@Component({
  selector: 'app-subject-model',
  templateUrl: './subject-model.component.html',
  styleUrls: ['./subject-model.component.css'],
})
export class SubjectModelComponent {
  searchQuery: string = '';
  suggestions: string[] = [
    'Requesting good time for interview call',
    'Submission of Police report',
    'Request for inspection visit',
  ];
  inputAdded: boolean = false;
  question: any;
  messageSection: boolean = false;
  showLoader: boolean = false;
  constructor( private policywiseService: PolicywiseService,public router:Router,public dialog:Dialog){}

  getInput() {
    this.showLoader = true;
    this.inputAdded = true;
    this.question = this.searchQuery;

    var details = {
      query: this.question,
    };

    this.policywiseService.getEmail(details).subscribe((res: any) => {
      if (res) {
        let parsedRes = res;
        this.showLoader = false;
        debugger
this.router.navigate(['email'],{
  queryParams:{
    res:parsedRes.result.body,
    sub:parsedRes.result.subject
  }

})
this.dialog.closeAll();
      }
    });
  }

  message() {
    this.messageSection = !this.messageSection;
  }
}
