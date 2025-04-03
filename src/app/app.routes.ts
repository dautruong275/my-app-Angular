import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { RegisterSuccessComponent } from './features/auth/register-success/register-success.component';
import { HomeComponent } from './features/home/home.component';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register-success', component: RegisterSuccessComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/login' }
];
