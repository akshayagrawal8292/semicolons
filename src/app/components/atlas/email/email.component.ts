import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  res:any;
  emailBody:any;
  sub:any;
constructor(private route: ActivatedRoute,){

}

ngOnInit() {
  this.route.queryParams.subscribe((event: any) => {
    this.res = event.res;
    this.emailBody=this.res;
    this.sub=event.sub;
  });
}
}
