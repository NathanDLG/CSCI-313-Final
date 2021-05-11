import { Component, OnInit } from '@angular/core';
import { UserTemplate } from '../UserTemplate';
import { UserService } from '../_services/user.service';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { CalendarsService } from '../calendars.service';
import { CalendarTemplate } from '../CalendarTemplate';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(
    private service: UserService,
    private serviceCal: CalendarsService
  ) {}

  ngOnInit(): void {
    this.userArray = this.service.getUsers();
    this.calendarArraylocal = this.serviceCal.getCalendars();
  }

  userArray: UserTemplate[];
  calendarArraylocal: CalendarTemplate[];
  public matchFound: boolean = false;

  i: number;
  temp: string;
  filteredArray: UserTemplate[];
  user$: Observable<UserTemplate[]>;

  coolArray: number[] = [1]; //Initialize initially to allow elements to be pushed/array reset

  onSubmit(value: string) {
    let searchnum: number = parseInt(value);
    this.coolArray = [];
    this.matchFound = false;
    for (let i = 0; i < this.calendarArraylocal.length; i++) {
      if (this.calendarArraylocal[i].userID == searchnum) {
        this.coolArray.push(this.calendarArraylocal[i].calendarID);
        this.matchFound = true;
      }
    }
  }

  filter(value: string) {
    // this.temp = this.userArray(UserTemplate.fname);

    for (this.i = 0; this.i < this.userArray.length - 1; this.i++) {
      this.userArray.find((el) => el.fname == this.temp);
    }
  }
}
