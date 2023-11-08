import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from 'src/dataType/interfaces';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    userName: new FormControl('', {nonNullable: true}),
    password: new FormControl('', {nonNullable: true})
  })
  showPassword: boolean;
  errorMessage$: Subject<string>;


  constructor(private router: Router, private userService: UserService) {
    this.showPassword = false;
    this.errorMessage$ = new Subject();
  }

  ngOnInit(): void {
    this.errorMessage$.next('');
  }
  
  getRandomTimeInterval = () => {
    return Math.floor(Math.random() * 500 + 100); 
  }
  
  validateLoginUser = (formValues: Partial<User>) => {
    if(this.loginForm.invalid) return;
    if(!!this.userService.checkUserExistsInList(formValues)) {
      setTimeout(() => {
        this.router.navigate(['/dashboard',formValues.userName])
      }, this.getRandomTimeInterval())
    } else {
      this.errorMessage$.next('User does not exist');
      setTimeout(() => {
        this.errorMessage$.next('');
      }, 3000);
    }
  }

  toggleShowPassword = () => {
    this.showPassword = !this.showPassword;
  }
}
