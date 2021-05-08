import { Injectable } from '@angular/core';
import { CalendarTemplate } from './CalendarTemplate';
import { Day } from './calendar/day';

@Injectable({
  providedIn: 'root',
})
export class CalendarsService {
  constructor() {}

  CalendarArray: CalendarTemplate[] = [
    {
      highlightedDays: [
        {
          num: 10,
          yr: 2021,
          mnth: 'May',
          monthIndex: 4,
          weekDayName: 'Mo',
          weekDayNumber: 1,
        } as Day,
      ],
      userID: 1,
      calendarID: 1,
    },
  ];

  tempCalendarID = 1;
  removable;
  temp;

  //Deliver calendar array
  getCalendars(): CalendarTemplate[] {
    return this.CalendarArray;
  }

  //Add new Calendar
  addCalendar(newCalendar: CalendarTemplate) {
    this.tempCalendarID = this.tempCalendarID + 1;
    newCalendar.calendarID = this.tempCalendarID;
    this.CalendarArray.push(newCalendar);
  }

  //Remove Calendar
  remove(calendarID: number) {
    this.removable = this.CalendarArray.find((x) => x.calendarID == calendarID);
    this.temp = this.CalendarArray.indexOf(this.removable);
    this.CalendarArray.splice(this.temp, 1);
  }
}
