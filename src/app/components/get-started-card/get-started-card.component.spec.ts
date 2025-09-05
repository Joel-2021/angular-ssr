import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedCardComponent } from './get-started-card.component';

describe('GetStartedCardComponent', () => {
  let component: GetStartedCardComponent;
  let fixture: ComponentFixture<GetStartedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetStartedCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetStartedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
