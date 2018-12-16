import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaRowComponent } from './criteria-row.component';

describe('CriteriaRowComponent', () => {
  let component: CriteriaRowComponent;
  let fixture: ComponentFixture<CriteriaRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriaRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
