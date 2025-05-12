import { Injectable, Inject} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = new BehaviorSubject<string>('ar'); 
  languageChanged = this.currentLang.asObservable();

  constructor(
    private translate: TranslateService,
  ) {}

  switchLang(lang: string): void {
    this.translate.use(lang);
    
    
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    

    this.currentLang.next(lang); 
  }

  getCurrentLang(): string {
    return this.currentLang.getValue(); 
  }
}
