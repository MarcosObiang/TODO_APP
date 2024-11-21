import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/AuthService/auth.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.scss'
})
export class LoginScreenComponent {

  formulario: FormGroup;

  constructor(
    private fomrBuilder: FormBuilder,
    private authService: AuthService,
    
  ) {
    this.formulario = fomrBuilder.group({ name: ["", [Validators.required, Validators.minLength(1)]], password: ["", [Validators.required, Validators.minLength(1),]] })
  }

  noEnviar(): void {

    if(this.formulario.invalid){
      return

    }

    else{
      let validate =this.authService.validate(this.formulario.value.name, this.formulario.value.password);
      if(validate){
        alert("correcto")
      }
      else{
        alert("incorrecto")
      }
    }
  }

}
