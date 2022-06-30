import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { PlanningComponent } from './planning/planning.component';
import { ModuleComponent } from './module/module.component';
import { SignatureComponent } from './signature/signature.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from "./dashboard/dashboard.component";



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'connexion'},
  { path: 'auth', component: AuthGuard },
  { path: 'connexion', component: ConnexionComponent, /*canActivate:[AuthGuard] */},
  { path: 'planning', component: PlanningComponent },
  { path: 'module', component: ModuleComponent },
  { path: 'signature', component: SignatureComponent },
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
