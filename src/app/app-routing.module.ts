/* import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialPageComponent } from '../app/components/mainPage/mainPage.component';
import { ModalRegisterComponent } from '../app/components/register/register.component';
import { LoginComponent } from '../app/components/login/login.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';

const routes: Routes = [
    { path: 'mainPage', component: InitialPageComponent}
    { path: 'register', component: ModalRegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', redirectTo: 'mainPage' }
];
  
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
   */