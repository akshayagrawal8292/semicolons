import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PolicywiseService {
  constructor(private http: HttpClient) {}

  getDetails(data: any): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      }),
    };

    return this.http.post(
      'https://policywise-new.gentlehill-24fae772.eastus.azurecontainerapps.io/api/chat_pdf_compare',
      data,
      httpOptions
    );
  }
}
