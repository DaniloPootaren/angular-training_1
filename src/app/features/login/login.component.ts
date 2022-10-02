import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/shared/models/shared-user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm;
  public inValidCredentials: boolean = false;

  constructor(private router: Router, private usersService : UsersService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public onSubmit() {

    this.inValidCredentials = false;

    if (this.loginForm.valid) {
      if (this.usersService.findOne(this.loginForm.value as User)) {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/']);
      } else {
        this.inValidCredentials = true;
      }
    }
  }

  ngOnInit(): void {}
}
