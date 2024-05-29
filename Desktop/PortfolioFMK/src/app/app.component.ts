import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, RouterOutlet } from '@angular/router';
import emailjs from "@emailjs/browser"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'PortfolioFMK';

  contactMessage: string = '';
  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'Admin',
    from_email: '',
    subject: '',
    message: '',
  })



  constructor(private fb: FormBuilder) {

  }

  async send() {
    emailjs.init('wDsAPhmQlmsFP1hB1')
    let response = await emailjs.send("service_u0dql93", "template_tt6mqzg", {
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
    });

    //  alert("Message has been sent.");
    this.contactMessage = 'Message envoyé avec success ✅'
    this.form.reset();

    setTimeout(() => {
      this.contactMessage = "";
    }, 3000);
  }


}
