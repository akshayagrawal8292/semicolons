/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuruAppComponent } from './guru-app.component';

describe('GuruAppComponent', () => {
  let component: GuruAppComponent;
  let fixture: ComponentFixture<GuruAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuruAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuruAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
