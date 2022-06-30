import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  seDeconnecter(){
    this.authService.deconnecter();
    this.router.navigateByUrl('/connexion');
  }

  item = [{
    'nom': 'Agatha Harkness',
    'classe': 'B2',
    'professeur': 'Stan Lee'
  }]

  qrInfo = JSON.stringify(this.item);


}
