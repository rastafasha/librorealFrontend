import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrorealComponent } from './libroreal.component';

describe('LibrorealComponent', () => {
  let component: LibrorealComponent;
  let fixture: ComponentFixture<LibrorealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrorealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrorealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
