import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegistro: FormGroup;
  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.formRegistro = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    });
  }
  registro(){
    console.log(this.formRegistro.value, this.formRegistro);
    this.formRegistro.reset();
  }
  get nombreInvalido(){
    return this.formRegistro.get('nombre').invalid && this.formRegistro.get('nombre').touched;
  }
  get nombreValido(){
    return this.formRegistro.get('nombre').valid
  }

  get apellidoInvalido(){
    return this.formRegistro.get('apellido').invalid && this.formRegistro.get('apellido').touched;
  }
  get apellidoValido(){
    return this.formRegistro.get('apellido').valid
  }
  get telefonoInvalido(){
    return this.formRegistro.get('telefono').invalid && this.formRegistro.get('telefono').touched;
  }

  get telefonoValido(){
    return this.formRegistro.get('telefono').valid
  }
  get emailInvalido(){
    return this.formRegistro.get('email').invalid && this.formRegistro.get('email').touched;
  }
  get emailValido(){
    return this.formRegistro.get('email').valid
  }

  get passwordInvalido(){
    return this.formRegistro.get('password').invalid && this.formRegistro.get('password').touched;
  }
  get passwordValido(){
    return this.formRegistro.get('password').valid
  }
  
}
