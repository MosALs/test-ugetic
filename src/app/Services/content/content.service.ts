import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Client, Service, Social , Page, Contact, reviews, FaqResponse} from '../../models/content.model';
import { Subjects } from 'src/app/models/blogs.model';



@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private baseUrl = `${environment.apiUrl}`; 

  constructor(
    private http: HttpClient,
 
  ) {}

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
  
  
  private getHeaders(): { headers: HttpHeaders } {
    const staticToken = 'Bearer 38|NfVcDYHH4Bu2902Hwb88ELt5nmHJlXmSUGa2pidS858f1bf9';
    const headers = new HttpHeaders()
      .set('Authorization', staticToken)
      .set('Accept', 'application/json')
      ;
    return { headers };
  }


  // ----------------- Clients ----------------- //

  getClients(): Observable<Client[]> {
    console.log('[SSR] Fetching clients...');

    return this.http.get<Client[]>(`${this.baseUrl}clients`, this.getHeaders()).pipe(
        catchError(this.handleError)
      
    );
  }

  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.baseUrl}clients/${id}`, this.getHeaders()).pipe(
        catchError(this.handleError)
      )
    
  }

  

  // ----------------- Services ----------------- //

 getServices(): Observable<Service[]> {

    return this.http.get<Service[]>(`${this.baseUrl}services`, this.getHeaders()).pipe(
        catchError(this.handleError)
      )
    
  }

  getServiceById(id: number): Observable<Service> {

    return this.http.get<Service>(`${this.baseUrl}services/${id}`, this.getHeaders()).pipe(
        catchError(this.handleError)
      
    );
  }

 

    // ----------------- Social-media ----------------- //
    getSocialLinks(): Observable<Social[]> {
      
      return this.http.get<Social[]>(`${this.baseUrl}socialMedia`, this.getHeaders()).pipe(
        catchError(this.handleError)
      
    );
      
    }
    
  
    getOneSocialLink(id: number): Observable<Social> {

      return  this.http.get<Social>(`${this.baseUrl}socialMedia/${id}`, this.getHeaders()).pipe(
          catchError(this.handleError)
        )
      
    }
  


// ----------------- Slider ----------------- //

getSlider(): Observable<any[]> {
 

  return this.http.get<any[]>(`${this.baseUrl}sliders`, this.getHeaders()).pipe(
      catchError(this.handleError)
    
  );
}



// ----------------- Pages ------------------//
getPages(): Observable<Page[]> {

  return this.http.get<Page[]>(`${this.baseUrl}pages`, this.getHeaders()).pipe(
      catchError(this.handleError)
    )
  
}
getOnePage(id: number): Observable<Page> {

  return  this.http.get<Page>(`${this.baseUrl}pages/${id}`, this.getHeaders()).pipe(
      catchError(this.handleError)
    )
  
}

// ------------- contact-us --------------

addContacts(data: FormData): Observable<Contact> {
  return this.http.post<Contact>(`${this.baseUrl}contacts`, data, this.getHeaders()).pipe(
    catchError(this.handleError)
  );
}

// ----------------- reviews ----------------- //

getReviews(): Observable<reviews[]> {
  console.log('[SSR] get reviews...');

  return  this.http.get<reviews[]>(`${this.baseUrl}reviews`, this.getHeaders()).pipe(
      catchError(this.handleError)
    )
  
}

// --------------- search  --------------- //
Search(keyword: string): Observable<Subjects[]> {
  console.log('[SSR] get search...');


  return this.http.get<Subjects[]>(`${this.baseUrl}subjects/search?keyword=${keyword}`, this.getHeaders()).pipe(
      catchError(this.handleError)
    )
  
}

// --------------- FAQ  --------------- //

getFAQ(): Observable<any[]> {
  console.log('[SSR] get faq...');

  return this.http.get<any[]>(`${this.baseUrl}question`, this.getHeaders()).pipe(
      catchError(this.handleError)
    
  );
}

}
