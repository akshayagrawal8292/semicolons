import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { GuruUiService } from 'src/app/services/guru-ui.service';

@Component({
  selector: 'app-guru-app',
  templateUrl: './guru-app.component.html',
  styleUrls: ['./guru-app.component.css']
})
export class GuruAppComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger | any;
  myForm: FormGroup;
  isCsvFilesSelected: boolean = true;
  isRdbmsSelected: boolean = false;
  isPdfSelected: boolean = false;
  inputAdded: boolean = false;
  question: any;
  pdfDocumentList: [] = [];
  promptAnswers :any;
  showLoader: boolean = false;

  constructor(private formBuilder: FormBuilder, private guruUiService: GuruUiService) {
    this.myForm = this.formBuilder.group({
      deposit: [''],
    });
  
   }

  ngOnInit() {
  
  }

  someMethod() {
    this.trigger.openMenu();
  }

  abc() {
    console.log("menu")
  }

  getInput() {
    this.showLoader = true;
    console.log("menu",this.myForm.getRawValue())
    this.inputAdded = true;
    this.question = this.myForm.getRawValue().deposit;
    this.guruUiService.getChatResults(this.question).subscribe((res: any) => {
      console.log("res ", res);
      if(res) {
        let parsedRes = JSON.parse(res);
        this.promptAnswers = parsedRes.result;
        console.log("this.promptAnswers ", this.promptAnswers);
         
        setTimeout(() => {
          this.showLoader = false;
        },5000)
      }
  })
  }

  csvMenuSelected() {
    this.isCsvFilesSelected = true;
    this.isRdbmsSelected = this.isPdfSelected = false;
  }

  rdbmsSelected() {
    this.isRdbmsSelected = true;
    this.isPdfSelected = this.isCsvFilesSelected = false;
  }

  pdfFileSelected() {
    this.isPdfSelected = true;
    this.isRdbmsSelected = this.isCsvFilesSelected = false;
    this.guruUiService.getPdfList().subscribe((res: any) => {
      console.log(res);
      if(res) {
        this.pdfDocumentList = res.result;
        console.log("this.pdfDocumentList ", this.pdfDocumentList);
      }
    })
  }
}
