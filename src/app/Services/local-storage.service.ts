import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  constructor() { }

  getItem(name: string): string {
      return localStorage.getItem(name) ?? 'ar';
   
  }

  setItem(name: string, value: string): void {

      localStorage.setItem(name, value);
    
  }
}
