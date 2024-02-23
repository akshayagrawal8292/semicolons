import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyWiseComponent } from './policy-wise.component';

describe('PolicyWiseComponent', () => {
  let component: PolicyWiseComponent;
  let fixture: ComponentFixture<PolicyWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyWiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
