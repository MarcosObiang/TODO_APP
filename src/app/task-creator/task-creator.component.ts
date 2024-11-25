import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskCreatorService } from '../Services/Task/task-creator.service';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrl: './task-creator.component.scss'
})
export class TaskCreatorComponent {

  formulario:FormGroup;

  constructor(private formBuilder:FormBuilder,router:Router,private taskCreatorService:TaskCreatorService){

    this.formulario=formBuilder.group({taskName:["",[Validators.required,Validators.minLength(1)]],taskDeadLine:["",[Validators.required,Validators.minLength(1)]],taskDescription:["",[]]})
  }

}
