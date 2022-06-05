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
  formData!: FormGroup;

  faHome = faHome;
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit() {
    this.formData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }

  // @ts-ignore
  submitForm(formData) {
    console.log(formData)
    this.contact.PostMessage(formData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })

  }
}
