import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipingFormComponent } from './shiping-form.component';

describe('ContactFormComponent', () => {
  let component: ShipingFormComponent;
  let fixture: ComponentFixture<ShipingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
