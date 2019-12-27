import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSelectedComponent } from './customer-selected.component';

describe('CustomerSelectedComponent', () => {
  let component: CustomerSelectedComponent;
  let fixture: ComponentFixture<CustomerSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
