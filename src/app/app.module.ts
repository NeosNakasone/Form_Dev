import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PlanningComponent } from './planning/planning.component';
import { ParticipantComponent } from './participant/participant.component';
import { SignatureComponent } from './signature/signature.component';
import { ProfesseurComponent } from './professeur/professeur.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    ProfesseurComponent,
    PlanningComponent,
    ParticipantComponent,
    SignatureComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,//import pour formulaire reactif
    ReactiveFormsModule,//idem en haut
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
