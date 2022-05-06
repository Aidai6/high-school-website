import { Component, OnInit, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @ViewChild('navLinks'):
  faXmark = faXmark;
  faBars = faBars;

  constructor() { }

  ngOnInit(): void {
  }

  // onHideMenu() {
  //   return this.navLinks.setStyle('right: -200px');
  //
  // }
  //
  // onShowMenu() {
  //   return this.navLinks.setStyle('right: 0');
  //
  // }
}
