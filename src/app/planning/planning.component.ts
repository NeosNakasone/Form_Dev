import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
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
