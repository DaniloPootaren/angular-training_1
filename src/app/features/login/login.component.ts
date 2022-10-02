import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm;
  public inValidCredentials: boolean = false;

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public onSubmit() {
    const { username, password } = this.loginForm.value;

    this.inValidCredentials = false;

    if (this.loginForm.valid) {
      if (username === 'admin' && password === 'admin') {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/']);
      } else {
        this.inValidCredentials = true;
      }
    }
  }

  ngOnInit(): void {}
}
