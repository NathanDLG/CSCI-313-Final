import { Component } from '@angular/core';

import { AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'team-wonderbread-final';
=======
  title = 'Wonderbread';
<<<<<<< HEAD
>>>>>>> 6f26718 (initial commit)
=======

  currentUser: any;

  constructor(
    private authenticationService: AuthenticationService
    //needs the router
    ){
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout(){
    this.authenticationService.logout();
    
    //needs to rout to the login page
    
  }
>>>>>>> 80ee479 (added the login component, authentication service, and some helper files)
}
