import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PolicywiseService } from 'src/app/services/policywise/policywise.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css'],
})
export class CompareComponent {
  firstPolicy: string = '';
  secondPolicy: string = '';
  displayedColumns: string[] = [
    'Compare Points',
    'State Farm Mutual Automobile Insurance	',
    'Progressive Auto Insurance',
  ];
  isCsvFilesSelected: boolean = true;
  isRdbmsSelected: boolean = false;
  isPdfSelected: boolean = false;
  inputAdded: boolean = false;
  question: any;
  pdfDocumentList: [] = [];
  promptAnswers: any;
  messageSection: boolean = false;
  showLoader: boolean = false;
  dataSource: any;
  searchQuery: string = '';
  suggestions: string[] = [
    'What are the nonrenewal clauses?',
    'What is the price of transportation expense',
    'What is not covered in the policy?',
    'I want a dedicated rental when my car is in shop. WHich policy gives the best policy coverage?',
  ];

  constructor(
    private route: ActivatedRoute,
    private policywiseService: PolicywiseService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.firstPolicy = params['firstPolicy'];
      this.secondPolicy = params['secondPolicy'];
    });

    this.dataSource = [
      {
        'Compare Points': 'Coverage for Pet Injury',
        'State Farm Mutual Automobile Insurance	': 'Yes',
        'Progressive Auto Insurance': 'Yes',
      },
      {
        'Compare Points': 'Non renewal',
        'State Farm Mutual Automobile Insurance	':
          'Notice 30 days before end of policy',
        'Progressive Auto Insurance': 'Notice 33 days before end of policy',
      },
      {
        'Compare Points': 'Transportation expenses',
        'State Farm Mutual Automobile Insurance	': '$25/day, max $750	',
        'Progressive Auto Insurance': '$30/day, max $900',
      },
      {
        'Compare Points': 'Towing',
        'State Farm Mutual Automobile Insurance	': 'Yes',
        'Progressive Auto Insurance': 'Yes',
      },
    ];
  }

  getInput() {
    this.showLoader = true;
    this.inputAdded = true;
    this.question = this.searchQuery;

    var details = {
      query: this.question,
      chunk1: 'auto_2',
      chunk2: 'auto_1',
      chat_hist: {
        question: '',
        answer: '',
      },
      user_email: 'mahantesh_patne@persistent.com',
    };

    this.policywiseService.getDetails(details).subscribe((res: any) => {
      if (res) {
        let parsedRes = res;
        this.promptAnswers = parsedRes.result;
        console.log('promptAnswers ', this.promptAnswers);
        this.showLoader = false;
      }
    });
  }

  message() {
    this.messageSection = !this.messageSection;
  }
}
