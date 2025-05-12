import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = environment.apiUrl;
  private tokenKey = 'authToken';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  private hasToken(): boolean {
      return !!localStorage.getItem(this.tokenKey);
    

  }

  private setSession(token: string): void {
   
      localStorage.setItem(this.tokenKey, token);
      this.isAuthenticatedSubject.next(true);
    
  }

 

  get isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  login(email: string, password: string): Observable<any> {
    const url = `${this.authUrl}/api/login`;
    const body = { email, password };

    return this.http.post(url, body).pipe(
      tap((response: any) => {
        this.setSession(response.token);
      })
    );
  }

  getToken(): string | null {

      return localStorage.getItem(this.tokenKey);
    

  }

  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  logout(): void {
  
      localStorage.removeItem(this.tokenKey);
      this.isAuthenticatedSubject.next(false);
      this.router.navigate(['/login']);
    
  }
}
