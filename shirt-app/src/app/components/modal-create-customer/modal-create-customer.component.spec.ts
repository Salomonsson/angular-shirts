import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateCustomerComponent } from './modal-create-customer.component';

describe('ModalCreateCustomerComponent', () => {
  let component: ModalCreateCustomerComponent;
  let fixture: ComponentFixture<ModalCreateCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
