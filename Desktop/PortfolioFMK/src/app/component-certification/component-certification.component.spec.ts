import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCertificationComponent } from './component-certification.component';

describe('ComponentCertificationComponent', () => {
  let component: ComponentCertificationComponent;
  let fixture: ComponentFixture<ComponentCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentCertificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
