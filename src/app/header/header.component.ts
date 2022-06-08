import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  @ViewChild('navLinks')navLinks!: ElementRef<>;
  faXmark = faXmark;
  faBars = faBars;

  constructor(private render: Renderer2) { }
  @Input() title: string = '';
  @Input() isHome!: boolean;
  en: string = 'English';
  ru: string = 'Russian';
  kg: string = 'Kyrgyz';
  lang!: string;

  ngOnInit() {
    this.lang =localStorage.getItem('lang') || 'en';
  }

  changeLang(e: any ) {
    this.lang = e.target.value;
    localStorage.setItem('lang', this.lang);
    window.location.reload();
    console.log(this.lang)
  }

  onShowMenu() {
    this.render.setStyle(this.navLinks.nativeElement,'right', '0');
  }

  onHideMenu() {
    this.render.setStyle(this.navLinks.nativeElement,'right', '-200px');
  }



}

