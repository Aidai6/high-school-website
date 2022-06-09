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
    const lang = localStorage.getItem('lang') || 'en';
    this.translateService.use(lang);
    document.documentElement.lang = lang;
  }

  setHeader() {
    let path = this.route.url.split('/')[1];

    if (this.route.url =='/' && localStorage.getItem('lang') == 'en') {
      this.title = 'Issyk-Kul Girls'+"'"+ ' High-School named after Ziiash Bektenov';
      this.isHome = true;
    }
    else if (this.route.url =='/' && localStorage.getItem('lang') == 'ru') {
      this.title = 'Иссык-Кульский женский лицей \n имени Зияша Бектенова';
      this.isHome = true;
    }
    else if (this.route.url =='/' && localStorage.getItem('lang') == 'kg') {
      this.title = 'Зыяш Бектенов атындагы Ысык-Көл кыздар лицейи';
      this.isHome = true;
    }
    else if (this.route.url =='/contactus'&& localStorage.getItem('lang') == 'en') {
      this.title = 'Contact Us';
      this.isHome =false;
    }
    else if (this.route.url =='/contactus'&& localStorage.getItem('lang') == 'ru') {
      this.title = 'Контакты';
      this.isHome =false;
    }
    else if (this.route.url =='/contactus'&& localStorage.getItem('lang') == 'kg') {
      this.title = 'Байланыш';
      this.isHome =false;
    }
    else if (this.route.url =='/education' && localStorage.getItem('lang') == 'en') {
      this.title = 'Education';
      this.isHome =false;
    }
    else if (this.route.url =='/education' && localStorage.getItem('lang') == 'ru') {
      this.title = 'Образование';
      this.isHome =false;
    }
    else if (this.route.url =='/education'&& localStorage.getItem('lang') == 'kg') {
      this.title = 'Билим берүү';
      this.isHome =false;
    }
    else if (this.route.url =='/about' && localStorage.getItem('lang') == 'en') {
      this.title = 'About';
      this.isHome =false;
    }
    else if (this.route.url =='/about' && localStorage.getItem('lang') == 'ru') {
      this.title = 'О нас';
      this.isHome =false;
    }
    else if (this.route.url =='/about'&& localStorage.getItem('lang') == 'kg') {
      this.title = 'Биз жөнундө';
      this.isHome =false;
    }
    else {
      this.title = decodeURIComponent(path);
      this.isHome =false;
    }
  }
}
