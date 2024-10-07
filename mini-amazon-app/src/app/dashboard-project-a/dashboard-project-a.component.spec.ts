import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProjectAComponent } from './dashboard-project-a.component';

describe('DashboardProjectAComponent', () => {
  let component: DashboardProjectAComponent;
  let fixture: ComponentFixture<DashboardProjectAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProjectAComponent]
    });
    fixture = TestBed.createComponent(DashboardProjectAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
