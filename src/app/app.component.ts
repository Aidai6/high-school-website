import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = '';
  isHome: boolean = false;

  constructor(private route: Router, private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }

  setHeader() {
    let path = this.route.url.split('/')[1];
    if (this.route.url =='/') {
      this.title = 'Ziiash Bektenov Girls'+"'"+ ' High-School';
      this.isHome = true;
    }
    else if (this.route.url =='/contactus') {
      this.title = 'Contact Us';
      this.isHome =false;
    }
    else if (this.route.url =='/courses') {
      this.title = 'Education';
      this.isHome =false;
    }
    else {
      this.title = decodeURIComponent(path);
      this.isHome =false;
    }
  }
}
