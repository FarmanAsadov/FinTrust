import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
    canActivate: [authGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./shared/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    loadChildren: () => import('./shared/forgot-password/forgot-password.module').then((m) => m.ForgotPasswordModule),
  },
  {
    path: '',
    loadChildren: () => import('./shared/register/register.module').then((m) => m.RegisterModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
