import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/shared/models/shared-user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registrationForm; 

  public onSubmit(){
    if(this.registrationForm.valid){
      this.usersService.addNewUser(this.registrationForm.value as User)
      this.router.navigate(['/login'])
    }
  }

  constructor(private usersService: UsersService, private router: Router) { 
    this.registrationForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

}
