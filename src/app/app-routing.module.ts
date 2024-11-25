import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { TaskCreatorComponent } from './task-creator/task-creator.component';

const routes: Routes = [
  { path: '', component: LoginScreenComponent },
  {path: 'sing-up', component: SingUpComponent},
  {path:"main",component:MainScreenComponent},
  {path:"taskCreator",component:TaskCreatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
