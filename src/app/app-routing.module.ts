import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { PlanningComponent } from './planning/planning.component';
import { ParticipantComponent } from './participant/participant.component';
import { SignatureComponent } from './signature/signature.component';
import { ProfesseurComponent } from './professeur/professeur.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'connexion'},
  { path: 'auth', component: AuthGuard },
  { path: 'connexion', component: ConnexionComponent, /*canActivate:[AuthGuard] */},
  { path: 'professeur', component: ProfesseurComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'participant', component: ParticipantComponent },
  { path: 'signature', component: SignatureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
