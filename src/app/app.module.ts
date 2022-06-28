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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
