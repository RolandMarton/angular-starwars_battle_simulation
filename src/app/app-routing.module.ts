import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { CharacterSelectionComponent } from './character-selection/character-selection.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginGuardService } from './login-guard.service';
import { LoginComponent } from './login/login.component';
import { LogoutGuardService } from './logout-guard.service';

const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent, 
    canActivate: [LogoutGuardService]
   },
  {
    path: 'character',
    component: CharacterSelectionComponent,
    canActivate: [AuthGuardService],
    canDeactivate: [LoginGuardService],
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: {
      message: 'Az oldal amit keresel elveszett a Galaxisban!',
      message2: 'Térj vissza a fedélzetre!',
    },
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
