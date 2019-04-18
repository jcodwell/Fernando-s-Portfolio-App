import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JadaDashboardComponent } from './jada-dashboard.component';

describe('JadaDashboardComponent', () => {
  let component: JadaDashboardComponent;
  let fixture: ComponentFixture<JadaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JadaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JadaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
