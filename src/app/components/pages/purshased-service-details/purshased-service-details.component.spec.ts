import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurshasedServiceDetailsComponent } from './purshased-service-details.component';

describe('PurshasedServiceDetailsComponent', () => {
  let component: PurshasedServiceDetailsComponent;
  let fixture: ComponentFixture<PurshasedServiceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurshasedServiceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurshasedServiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
