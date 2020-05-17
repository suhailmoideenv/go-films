import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/api.login';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private fb: FormBuilder,private router:Router) { this.createLoginForm(); }

  public loginForm: FormGroup;

  ngOnInit(): void {
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      uname: [''],
      psw: ['']
    })
  }

  loginServiceMethod() {
    let loginObj = {'email':this.loginForm.value.uname,'password':this.loginForm.value.psw};
    this.loginService.login(loginObj).subscribe(res => {
      const response:any = res;
      console.log(response);
      if(response.token){
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('token', response.token);
        this.router.navigate(['/films'])
      }
    })
  }

}
