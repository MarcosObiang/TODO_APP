import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/AuthService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.scss'
})
export class LoginScreenComponent {

  formulario: FormGroup;

  constructor(
    private router: Router,
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
        this.router.navigate(['/main'])
      }
      else{
        alert("Los datos de acceso son incorrectos")
      }
    }
  }

}
