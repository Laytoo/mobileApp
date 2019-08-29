import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployeePage } from './addemployee.page';

describe('AddemployeePage', () => {
  let component: AddemployeePage;
  let fixture: ComponentFixture<AddemployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddemployeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
