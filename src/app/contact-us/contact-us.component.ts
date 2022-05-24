import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  faHome = faHome;
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
