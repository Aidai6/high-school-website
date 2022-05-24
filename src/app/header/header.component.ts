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



  ngOnInit(): void {
  }


  onShowMenu() {
    this.render.setStyle(this.navLinks.nativeElement,'right', '0');
  }

  onHideMenu() {
    this.render.setStyle(this.navLinks.nativeElement,'right', '-200px');
  }

}

