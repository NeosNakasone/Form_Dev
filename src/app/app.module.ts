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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { QRCodeModule } from 'angularx-qrcode';
import { AngularSignaturePadModule } from '@almothafar/angular-signature-pad';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    PlanningComponent,
    ParticipantComponent,
    SignatureComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,//import pour formulaire reactif
    ReactiveFormsModule,//idem en haut
    BrowserAnimationsModule,
    AppRoutingModule,
    QRCodeModule,
    AngularSignaturePadModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }