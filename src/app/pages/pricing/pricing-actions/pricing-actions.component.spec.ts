import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingActionsComponent } from './pricing-actions.component';

describe('PricingActionsComponent', () => {
  let component: PricingActionsComponent;
  let fixture: ComponentFixture<PricingActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
