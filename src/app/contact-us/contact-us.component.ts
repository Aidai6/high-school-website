import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ContactService } from '../contact.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: [`./contact-us.component.css`]
})
export class ContactUsComponent implements OnInit {
  formData: any;

  faHome = faHome;
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit() {
    this.formData = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'subject': new FormControl(null, [Validators.required]),
      'message': new FormControl(null, [Validators.required])
    });

  }

  // @ts-ignore
  submitForm(formData) {
    // const message = `Name: ${this.name}; Sender email: ${this.email}; Subject: ${this.subject}; Message: ${this.message}`
    // alert(message);
    console.log(formData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })

  }
}
