import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  //Component to have the different buttons for the routing module 

  constructor() { }

  ngOnInit(): void {
  }

  

}
