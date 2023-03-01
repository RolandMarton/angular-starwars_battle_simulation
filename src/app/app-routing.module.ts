import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterSelectionComponent } from './character-selection/character-selection.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: {
      message: 'Az oldal amit keresel elveszett a Galaxisban!',
      message2: 'Térj vissza a fedélzetre!',
    },
  },
  { path: 'character', component: CharacterSelectionComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
