import { Injectable } from '@angular/core';
import {Day} from './calendar/day';

@Injectable({
  providedIn: 'root'
})
export class CalendarCreatorService {
  //currentYear and currentMonthIndex return the current month and year represented by the calendar
  private currentYear: number;
  private currentMonthIndex: number;

  public dayNotes = ["Notes for Day 1:", "Notes for Day 2:", "Notes for Day 3:", "Notes for Day 4:",
  "Notes for Day 5:", "Notes for Day 6:", "Notes for Day 7:", "Notes for Day 8:", "Notes for Day 9:",
  "Notes for Day 10:", "Notes for Day 11:", "Notes for Day 12:", "Notes for Day 13:", "Notes for Day 14:",
  "Notes for Day 15:", "Notes for Day 16:", "Notes for Day 17:", "Notes for Day 18:", "Notes for Day 19:",
  "Notes for Day 20:", "Notes for Day 21:", "Notes for Day 22:", "Notes for Day 23:", "Notes for Day 24:",
  "Notes for Day 25:", "Notes for Day 26:", "Notes for Day 27:", "Notes for Day 28:", "Notes for Day 29:",
  "Notes for Day 30:", "Notes for Day 31:"];

  //gets the currentYear and currentMonthIndex
  constructor() {
    let date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonthIndex = date.getMonth(); 
  }

  public getNoteInfo()
  {
    return this.dayNotes;
  }

  public changeDayNotes(day: number, note: string)
  {
    this.dayNotes[day - 1] = note;
  }
  
  //return the current month
  public getCurrentMonth(): Day[] {
    return this.getMonth(this.currentMonthIndex, this.currentYear);
  }

  //returns array of Days
  public getMonth(monthIndex: number, year: number): Day[] {
    let days = [];

    let firstday = this.createDay(1, monthIndex, year);

    for (let i = 1; i < firstday.weekDayNumber; i++) {
      days.push({
        weekDayNumber: i,
        monthIndex: monthIndex,
        yr: year,
      } as Day);
    }
    days.push(firstday);

    let countDaysInMonth = new Date(year, monthIndex +1, 0).getDate();
    for (let i = 2; i < countDaysInMonth +1; i++) {
      days.push(this.createDay(i, monthIndex, year));
    }

    return days;
  }

  //Gets specific month by using switch case
  public getMonthName(monthIndex: number): string {
    switch (monthIndex) {     
      case 0:
        return "January";      
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";

      default:
        return "monthIndex is not between 0-11";
    }
  }

  //Returns the Day of the week by switch case
  public getWeekDayName(weekDay: number): string {
    switch (weekDay) {
      case 0:
        return "Su";
      case 1:
        return "Mo";
      case 2:
        return "Tu";
      case 3:
        return "We";
      case 4:
        return "Th";
      case 5:
        return "Fr";
      case 6:
        return "Sa"; 

      default:
        return "weekDay is not between 0-6";
    }
  }

  //private method that creates a day by using previously declared methods
  private createDay(dayNumber: number, monthIndex: number, year: number) {
    let day = new Day();

    day.monthIndex = monthIndex;
    day.mnth = this.getMonthName(monthIndex);

    day.num = dayNumber;
    day.yr = this.currentYear;

    day.weekDayNumber = new Date(year, monthIndex, dayNumber).getDay();
    day.weekDayName = this.getWeekDayName(day.weekDayNumber);

    return day;
  }
}


