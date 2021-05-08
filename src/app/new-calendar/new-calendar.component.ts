import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { CalendarsService } from '../calendars.service';
import { UserTemplate } from '../UserTemplate';
import { RouterModule, Router } from '@angular/router';
import { CalendarTemplate } from '../CalendarTemplate';
import { CalendarCreatorService } from '../calendar-creator.service';
import { Day } from '../calendar/day';

@Component({
  selector: 'app-new-calendar',
  templateUrl: './new-calendar.component.html',
  styleUrls: ['./new-calendar.component.css'],
})
export class NewCalendarComponent implements OnInit {
  constructor(
    private UserService: UserService,
    public CalendarsService: CalendarsService,
    public calendarCreator: CalendarCreatorService,
    private router: Router
  ) {}
  public users: UserTemplate[] = [];
  public calendars: CalendarTemplate[] = [];
  public highlightedDays: Day[] = [];

  //array for the days in a month
  public monthDays: Day[];

  //Month represented by number. Ex: January = 1, February
  public monthNumber: number;

  //Year represented as a number
  public year: number;

  //Monday - Friday
  public weekDaysName = [];

  //uses the calendar service

  ngOnInit(): void {
    //sets the calendar to its current month
    this.setMonthDays(this.calendarCreator.getCurrentMonth());
    this.getUsers();
    this.getCalendars();
    //Push unreachable day to highlightedDays to initialize for checking if days are already highlighted later
    this.highlightedDays.push({
      num: 10,
      yr: 2021,
      mnth: 'Unreachable',
      monthIndex: 4,
      weekDayName: 'Mo',
      weekDayNumber: 1,
    } as Day);

    //pushes monday - sunday onto the array
    this.weekDaysName.push('Monday');
    this.weekDaysName.push('Tuesday');
    this.weekDaysName.push('Wednesday');
    this.weekDaysName.push('Thursday');
    this.weekDaysName.push('Friday');
    this.weekDaysName.push('Saturday');
    this.weekDaysName.push('Sunday');
  }

  //method to get to the next month
  onNextMonth(): void {
    this.monthNumber++;

    //Goes to January if month is December
    if (this.monthNumber == 12) {
      this.monthNumber = 0;
      this.year++;
    }

    //Sets month to new month
    this.setMonthDays(
      this.calendarCreator.getMonth(this.monthNumber, this.year)
    );
  }

  //method to get to the previous month
  onPreviousMonth(): void {
    this.monthNumber--;

    //Goes to December if month is January
    if (this.monthNumber < 1) {
      this.monthNumber = 11;
      this.year--;
    }

    //Sets month to new month
    this.setMonthDays(
      this.calendarCreator.getMonth(this.monthNumber, this.year)
    );
  }

  //private method that changes the calendar to a month determined by the user
  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].yr;
  }

  onButton(day: Day): void {
    let dayHighlighted: boolean = false;
    for (let highlightedDay of this.highlightedDays) {
      //If day is already highlighted, remove it from the array and set dayHighlighted to true
      if (
        day.num == highlightedDay.num &&
        day.mnth == highlightedDay.mnth &&
        day.yr == highlightedDay.yr
      ) {
        dayHighlighted = true;
        const index = this.highlightedDays.indexOf(highlightedDay, 0);
        if (index > -1) {
          this.highlightedDays.splice(index, 1);
        }
      }
    }
    //If day wasn't highlighted push to array
    if (!dayHighlighted) {
      this.highlightedDays.push(day);
    }
  }

  checkDayHighlighted(day: Day): boolean {
    let dayHighlighted: boolean = false;
    for (let highlightedDay of this.highlightedDays) {
      if (day == highlightedDay) {
        dayHighlighted = true;
      }
    }
    return dayHighlighted;
  }

  getCalendars(): void {
    this.calendars = this.CalendarsService.getCalendars();
  }

  getUsers(): void {
    this.users = this.UserService.getUsers();
  }

  createNewCalendar(enteredID: string): void {
    var numID: number = +enteredID;
    this.CalendarsService.addCalendar({
      highlightedDays: this.highlightedDays,
      userID: numID,
      calendarID: 1,
    } as CalendarTemplate);
  }
}
