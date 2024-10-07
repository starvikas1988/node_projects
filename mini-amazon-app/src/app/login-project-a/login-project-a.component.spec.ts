import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginProjectAComponent } from './login-project-a.component';

describe('LoginProjectAComponent', () => {
  let component: LoginProjectAComponent;
  let fixture: ComponentFixture<LoginProjectAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginProjectAComponent]
    });
    fixture = TestBed.createComponent(LoginProjectAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
