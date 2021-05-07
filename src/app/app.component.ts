import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-wonderbread-final';

  currentUser: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ){
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  //if the user logs out, log them out using authentication service, and route the user to the login page
  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
