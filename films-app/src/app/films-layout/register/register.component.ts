import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/api.login';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) { this.createRegistrationForm(); }

  public regForm: FormGroup;

  createRegistrationForm() {
    this.regForm = this.fb.group({
      uname: [''],
      uemail: [''],
      psw: ['']
    })
  }

  ngOnInit(): void {
  }


  registerUser() {
    let regObj = { 'name': this.regForm.value.uname, 'email': this.regForm.value.uemail, 'password': this.regForm.value.psw }
    this.loginService.register(regObj).subscribe(res => {
      const response: any = res;
      if (response.token){
        this.router.navigate(['/films'])
      }
  })
}

}
