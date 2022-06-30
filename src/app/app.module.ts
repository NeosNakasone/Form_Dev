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
import { QRCodeModule } from 'angular2-qrcode';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AngularSignaturePadModule } from '@almothafar/angular-signature-pad';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    PlanningComponent,
    ParticipantComponent,
    SignatureComponent,
    EtudiantComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,//import pour formulaire reactif
    ReactiveFormsModule,//idem en haut
    AppRoutingModule,
    BrowserAnimationsModule,
    QRCodeModule,
    AngularSignaturePadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
