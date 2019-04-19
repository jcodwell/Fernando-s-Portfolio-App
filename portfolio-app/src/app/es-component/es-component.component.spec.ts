import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsComponentComponent } from './es-component.component';

describe('EsComponentComponent', () => {
  let component: EsComponentComponent;
  let fixture: ComponentFixture<EsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
