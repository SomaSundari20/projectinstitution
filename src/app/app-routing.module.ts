import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeinComponent } from './homein/homein.component';
import { InstitutionComponent } from './institution/institution.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'homein', component: HomeinComponent },
  { path: 'institution', component: InstitutionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

