import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitesAdvetiseDetailsComponent } from './websites-advetise-details.component';

describe('WebsitesAdvetiseDetailsComponent', () => {
  let component: WebsitesAdvetiseDetailsComponent;
  let fixture: ComponentFixture<WebsitesAdvetiseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsitesAdvetiseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitesAdvetiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
