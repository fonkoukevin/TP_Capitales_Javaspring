// import { Component, AfterViewInit } from '@angular/core';
// import emailjs from 'emailjs-com'; // Assurez-vous que emailjs est installé via npm ou yarn

// @Component({
//   selector: 'app-accueil',
//   templateUrl: './accueil.component.html',
//   styleUrls: ['./accueil.component.css']
// })
// export class AccueilComponent implements AfterViewInit {
//   contactMessage: string = '';
//   contactForm: any;

//   constructor() {}

//   ngAfterViewInit() {
//     // Assurez-vous que l'élément contact_form est récupéré après que la vue a été initialisée
//     this.contactForm = document.getElementById("contact_form");
//   }

//   sendEmail(e: Event) {
//     e.preventDefault();

//     emailjs.sendForm('service_u0dql93', 'template_yy6g4pe', '#contact_form', 'wDsAPhmQlmsFP1hB1')
//       .then(() => {
//         this.contactMessage = "Message sent successfully ✅";
//         setTimeout(() => {
//           this.contactMessage = '';
//         }, 5000);

//         // Réinitialiser le formulaire (si nécessaire)
//         this.contactForm.reset();
//       })
//       .catch(() => {
//         this.contactMessage = 'Message not sent (service error) ❌';
//       });
//   }
// }




// import { Component, AfterViewInit, ViewChild } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms'; // Importez NgForm
// import emailjs from 'emailjs-com'; // Assurez-vous que emailjs est installé via npm ou yarn
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-accueil',
//   standalone: true,
//   imports: [CommonModule,FormsModule],
//   templateUrl: './accueil.component.html',
//   styleUrls: ['./accueil.component.css']
// })
// export class AccueilComponent implements AfterViewInit {
//   contactMessage: string = '';
//   @ViewChild('contactForm') contactForm!: NgForm; // Récupérez la référence de modèle

//   constructor() {}

//   ngAfterViewInit() {
//     // Vous pouvez maintenant accéder à this.contactForm
//   }

//   sendEmail(e: Event) {
//     e.preventDefault();

//     // Utilisez this.contactForm.value pour accéder aux valeurs du formulaire
//     emailjs.sendForm('service_u0dql93', 'template_yy6g4pe', '#contact_form', 'wDsAPhmQlmsFP1hB1')
//       .then(() => {
//         this.contactMessage = "Message sent successfully ✅";
//         setTimeout(() => {
//           this.contactMessage = '';
//         }, 5000);

//         // Réinitialiser le formulaire
//         this.contactForm.resetForm();
//       })
//       .catch(() => {
//         this.contactMessage = 'Message not sent (service error) ❌';
//       });
//   }
// }





// import { Component, AfterViewInit, ViewChild } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms'; // Importez NgForm
// import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-accueil',
//   standalone: true,
//   imports: [CommonModule,FormsModule],
//   templateUrl: './accueil.component.html',
//   styleUrls: ['./accueil.component.css']
// })
// export class AccueilComponent {
//   contactMessage: string = '';
//   @ViewChild('contactForm') contactForm!: NgForm;

//   constructor() {}

//   sendEmail() {
//     emailjs.sendForm('service_u0dql93', 'template_yy6g4pe', this.contactForm.form, 'wDsAPhmQlmsFP1hB1')
//       .then((response: EmailJSResponseStatus) => {
//         console.log('Email sent successfully', response);
//         this.contactMessage = "Message sent successfully ✅";
//         setTimeout(() => {
//           this.contactMessage = '';
//         }, 5000);
  
//         // Reset the form
//         this.contactForm.resetForm();
//       })
//       .catch((error: any) => {
//         console.error('Error sending email', error);
//         this.contactMessage = 'Message not sent (service error) ❌';
//       });
//   }
  
// }


// import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms'; // Importez NgForm
// import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-accueil',
//   standalone: true,
//   imports: [CommonModule,FormsModule],
//   templateUrl: './accueil.component.html',
//   styleUrls: ['./accueil.component.css']
// })
// export class AccueilComponent {
//   contactMessage: string = '';
//   @ViewChild('contactForm') contactForm!: NgForm;
//   @ViewChild('contactFormElement') contactFormElement!: ElementRef;

//   constructor() {}

//   sendEmail() {
//      emailjs.sendForm('service_u0dql93', 'template_yy6g4pe', this.contactFormElement.nativeElement, 'wDsAPhmQlmsFP1hB1')
//       .then((response: EmailJSResponseStatus) => {
//         console.log('Email sent successfully', response);
//         this.contactMessage = "Message sent successfully ✅";
//         setTimeout(() => {
//           this.contactMessage = '';
//         }, 5000);

//         // Reset the form
//         this.contactForm.resetForm();
//       })
//       .catch((error: any) => {
//         console.error('Error sending email', error);
//         this.contactMessage = 'Message not sent (service error) ❌';
//       });
//   }
// }



// import { CommonModule } from '@angular/common';
// import { Component, ViewChild, ElementRef } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms'; // Importez NgForm
// import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

// @Component({
//   selector: 'app-accueil',
//     standalone: true,
//   imports: [CommonModule,FormsModule],
//   templateUrl: './accueil.component.html',
//   styleUrls: ['./accueil.component.css']
// })
// export class AccueilComponent {
//   contactMessage: string = '';
//   @ViewChild('contactForm') contactForm!: NgForm;
//   @ViewChild('contactFormElement') contactFormElement!: ElementRef | undefined;

//   constructor() {}

//   sendEmail() {
//     if (!this.contactFormElement) {
//       console.error('Contact form element is not defined.');
//       return;
//     }

//     emailjs.sendForm('service_u0dql93', 'template_yy6g4pe', this.contactFormElement.nativeElement, 'wDsAPhmQlmsFP1hB1')
//       .then((response: EmailJSResponseStatus) => {
//         console.log('Email sent successfully', response);
//         this.contactMessage = "Message sent successfully ✅";
//         setTimeout(() => {
//           this.contactMessage = '';
//         }, 5000);

//         // Reset the form
//         if (this.contactForm) {
//           this.contactForm.resetForm();
//         } else {
//           console.error('Contact form is not defined.');
//         }
//       })
//       .catch((error: any) => {
//         console.error('Error sending email', error);
//         this.contactMessage = 'Message not sent (service error) ❌';
//       });
//   }
// }



import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ProjetComponent } from '../../projet/projet/projet.component';
import { ComponentCertificationComponent } from '../../component-certification/component-certification.component';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from "@emailjs/browser"

@Component({
  selector: 'app-accueil',
  standalone: true,
     imports: [CommonModule,FormsModule,ProjetComponent,ComponentCertificationComponent],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements AfterViewInit {
  contactMessage: string = '';
  @ViewChild('contactForm') contactForm!: NgForm;
  @ViewChild('contactFormElement') contactFormElement!: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    console.log('Contact Form Element:', this.contactFormElement);
  }

  sendEmail() {
    if (this.contactFormElement && this.contactForm) {
      emailjs.sendForm('service_u0dql93', 'template_yy6g4pe', this.contactFormElement.nativeElement, 'wDsAPhmQlmsFP1hB1')
        .then(() => {
          console.log('Email sent successfully');
          this.contactMessage = "Message sent successfully ✅";
          setTimeout(() => {
            this.contactMessage = '';
          }, 5000);
  
          // Reset the form
          this.contactForm.resetForm();
        })
        .catch((error: any) => {
          console.error('Error sending email', error);
          this.contactMessage = 'Message not sent (service error) ❌';
        });
    } else {
      console.error('Contact form element or NgForm is not defined.');
    }
  }
}
