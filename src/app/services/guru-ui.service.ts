import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuruUiService {
  constructor(public http: HttpClient) {}

  getCall(url: string): Observable<any> {
    return this.http.get(url);
  }

  postCall(url: string, params: any): Observable<any> {
    return this.http.post(url, params,{ responseType: 'text' });
  }

  getPdfList(): Observable<any> {
    return this.getCall(
      'https://presales-guru-backend.lemonfield-bd85b07d.eastus2.azurecontainerapps.io/api/getchunkedpdfs'
    ).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getChatResults(question: any): Observable<any> {
    const params = {
      query: question,
      db: "Bajaj_Allianz Policy Wording",
      chat_hist :[
        {
          question: 'dsff',
          answer: 'i dont know'
        }
      ]
    }
    return this.postCall(
      'https://presales-guru-backend.lemonfield-bd85b07d.eastus2.azurecontainerapps.io/api/chat_with_pdf_generic',
      params
    ).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
