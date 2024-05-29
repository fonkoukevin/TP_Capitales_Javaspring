import { AfterViewInit, Component, HostListener } from '@angular/core';
// import { HostListener } from '@angular/core';
@Component({
  selector: 'app-component-certification',
  standalone: true,
  imports: [],
  templateUrl: './component-certification.component.html',
  styleUrl: './component-certification.component.css'
})
export class ComponentCertificationComponent implements AfterViewInit {
  animateOnScrollElements: any;

  constructor() {}

  ngAfterViewInit() {
    this.animateOnScrollElements = document.querySelectorAll('.t1, .t2, .t3');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    this.animateOnScrollElements.forEach((element: any) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (elementPosition - screenHeight <= 0) {
        element.classList.add('animate');
      }
    });
  }
}
