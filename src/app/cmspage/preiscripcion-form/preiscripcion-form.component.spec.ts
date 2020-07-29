import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreiscripcionFormComponent } from './preiscripcion-form.component';

describe('ContactFormComponent', () => {
  let component: PreiscripcionFormComponent;
  let fixture: ComponentFixture<PreiscripcionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreiscripcionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreiscripcionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
