import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Category, Subjects , Comment} from 'src/app/models/blogs.model';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  private baseUrl = `${environment.apiUrl}`; 

  constructor(
    private http: HttpClient,
   


  ) {}

  private handleError(error: any): Observable<never> {
    console.error('  ERROR', {
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
  
// ----------------  Category ------------- 
getCategory(): Observable<Category[]> {

  return this.http.get<Category[]>(`${this.baseUrl}categories`, this.getHeaders()).pipe(
      catchError(this.handleError)
    )
  
}

getOneCategoryById(id: number): Observable<Category> {
 

  return this.http.get<Category>(`${this.baseUrl}categories/${id}`, this.getHeaders()).pipe(
      catchError(this.handleError)
    
  );
}
// ----------------  subject ------------- 

getSubjects(): Observable<Subjects[]> {

  return this.http.get<Subjects[]>(`${this.baseUrl}subjects`, this.getHeaders()).pipe(
      catchError(this.handleError)
    
  );
}

getOneSubjectById(id: number): Observable<Subjects> {

  return  this.http.get<Subjects>(`${this.baseUrl}subjects/${id}`, this.getHeaders()).pipe(
      catchError(this.handleError)
    
  );
}

// -------------- comments ----------------
GetCommentsById(id: number): Observable<Comment> {

  return this.http.get<Comment>(`${this.baseUrl}comment/${id}`, this.getHeaders()).pipe(
      catchError(this.handleError)
    
  );
}

addComment(id: number, comment: { content: string }): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}comment/${id}`, comment, this.getHeaders()).pipe(
    catchError(this.handleError)
  );
}


}