import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-participant',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  navigQr() {
    this.router.navigateByUrl('/etudiant');
  }

  navigPlan() {
    this.router.navigateByUrl('/planning');
  }

  navigSign() {
    this.router.navigateByUrl('/signature');
  }

  navigPart() {
    this.router.navigateByUrl('/module');
  }

  navigDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

  seDeconnecter(){
    this.authService.deconnecter();
    this.router.navigateByUrl('/connexion');
  }

}
