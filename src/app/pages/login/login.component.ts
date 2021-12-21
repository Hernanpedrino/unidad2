import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    });
  }
  login(){
    console.log(this.formLogin.value);
    
  }
  get emailInvalido(){
    return this.formLogin.get('email').invalid && this.formLogin.get('email').touched;
  }
  get emailValido(){
    return this.formLogin.get('email').valid
  }

  get passwordInvalido(){
    return this.formLogin.get('password').invalid && this.formLogin.get('password').touched;
  }

  get passwordValido(){
    return this.formLogin.get('password').valid
  }

}
