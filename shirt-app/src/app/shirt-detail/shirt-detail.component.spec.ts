import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtDetailComponent } from './shirt-detail.component';

describe('ShirtDetailComponent', () => {
  let component: ShirtDetailComponent;
  let fixture: ComponentFixture<ShirtDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
