import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TakeNoteComponent } from './components/take-note/take-note.component';
import { GetnotesComponent } from './components/getnotes/getnotes.component';
import { ArchivenoteComponent } from './components/archivenote/archivenote.component';
import { TrashnoteComponent } from './components/trashnote/trashnote.component';
import { AuthGuardGuard } from './AuthorizationGuard/authguard.guard';
const routes: Routes = [
  {path: 'register',component: RegistrationComponent},
  {path: '', component: LoginComponent},
  {path: 'forgetpass', component: ForgetPassComponent},
  {path: 'resetpass', component: ResetPassComponent},

  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuardGuard],
  children:[
    {path:'getnote', component: GetnotesComponent},
    {path:'archeive', component:ArchivenoteComponent},
    {path:'trash', component:TrashnoteComponent}
  ]

},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
