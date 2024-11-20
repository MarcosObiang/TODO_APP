import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.scss'
})
export class LoginScreenComponent {

  formulario: FormGroup;

  constructor(fomrBuilder: FormBuilder) {
    this.formulario = fomrBuilder.group({ name: ["", [Validators.required, Validators.minLength(1)]], password: ["", [Validators.required, Validators.minLength(1),]] })
  }

  enviar(): void {
    console.log(this.formulario.value);
  }

}
