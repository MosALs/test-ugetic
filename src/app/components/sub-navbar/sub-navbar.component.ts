import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Social } from 'src/app/models/content.model';
import { ContentService } from 'src/app/services/content/content.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.css']
})
export class SubNavbarComponent implements OnInit {
  isNavbarVisible: boolean = true;
  social: Social[] = [];

  constructor(
    private contentService: ContentService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.fetchSocialLinks();
  }

  fetchSocialLinks() {
    this.contentService.getSocialLinks().subscribe({
      next: (data: Social[]) => {
        this.social = data;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      this.isNavbarVisible = scrollTop <= 50;
          }
  }
}
