import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take, timeout, timer } from 'rxjs';
import { UserData } from 'src/dataType/UserData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })

  delayTimer = (intervalBegin: number, intervalEnd: number) => {
    return timer(intervalBegin, intervalEnd);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
  
  getRandomTimeInterval() {
    return Math.floor(Math.random() * (600 - 100) + 100);
  }
  
  validateLoginUser(formValues: Partial<UserData>): void {
    console.log('inside validateLoginUser');
    //if(formValues.userName === "MAINT" && formValues.password === "safetyiskey") {
    if(formValues.userName === "a" && formValues.password === "a") {
      console.log(new Date())
      setTimeout(() => {
        this.router.navigate(['/dashboard',formValues.userName])
      }, this.getRandomTimeInterval())
      /* this.delayTimer(10000, 60000).pipe(
        take(1)
      ).subscribe((res) => {
        console.log(new Date())
        this.router.navigate(['/dashboard',formValues.userName])
      }) */ 
    }
  }
}
