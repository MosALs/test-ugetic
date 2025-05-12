import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of , tap} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { SEO } from 'src/app/models/metadata.model';




@Injectable({
  providedIn: 'root',
})
export class MetaDataService {
  private baseUrl = `${environment.apiUrl}`; 


  constructor(
    private http: HttpClient,
   


  ) {}

// --------------------  general -----------------------

private handleError(error: any): Observable<never> {
  console.error(' ERROR', {
    name: error?.name,
    message: error?.message,
    status: error?.status,
    url: error?.url,
    error: error?.error,
    stack: error?.stack
  });
  return throwError(() => new Error(error?.message || 'An error occurred'));
}


private getHeaders() {
  const staticToken = '38|NfVcDYHH4Bu2902Hwb88ELt5nmHJlXmSUGa2pidS858f1bf9';

  return {
    headers: new HttpHeaders({
      Authorization: `Bearer ${staticToken}`,
  
    })
  };
}


//   --------------------- SEO ----------------------
getSEO(): Observable<SEO[]> {

  return  this.http.get<SEO[]>(`${this.baseUrl}seos`, this.getHeaders())

}

}