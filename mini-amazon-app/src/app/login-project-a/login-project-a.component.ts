import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-login-project-a',
  templateUrl: './login-project-a.component.html',
  styleUrls: ['./login-project-a.component.css']
})
export class LoginProjectAComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient,public router: Router) {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.http
        .post('localhost:3001/api/v1/user/login', this.loginForm.value)
        .subscribe(() => {
          console.log('LoggedIn successfully');
          this.router.navigate(['dashboard']);
         // this.loginForm.reset();
        });
    }
  }

}
