import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  validate(name: string, password: string):boolean{
    const usuarios=[
      {name: "admin", password: "admin"}
    ]

    let salir=false;
    let valido=false;
    let contador=0;

    while(salir==false&&contador<usuarios.length){
      if(usuarios[contador].name==name&&usuarios[contador].password==password){
        salir=true;
        valido=true;
      }
      contador++;
    }

   return valido;

    
  }
}
