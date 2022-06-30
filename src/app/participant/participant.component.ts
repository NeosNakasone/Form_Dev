import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {

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
    this.router.navigateByUrl('/participant');
  }

  seDeconnecter(){
    this.authService.deconnecter();
    this.router.navigateByUrl('/connexion');
  }

}
