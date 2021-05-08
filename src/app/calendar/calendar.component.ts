import { Component, OnInit, Input, Output } from "@angular/core";
import { CalendarCreatorService } from "../calendar-creator.service";
import { Day } from "./day";

export type EditorType = 'start' | 'notes';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  //array for the days in a month
  public monthDays: Day[];

  //Month represented by number. Ex: January = 1, February
  public monthNumber: number;

  //Year represented as a number
  public year: number;

  //Monday - Friday
  public weekDaysName = [];

  //uses the calendar service
  constructor(public calendarCreator: CalendarCreatorService) {}

  ngOnInit(): void {
    //sets the calendar to its current month
    this.setMonthDays(this.calendarCreator.getCurrentMonth());

    //pushes monday - sunday onto the array
    this.weekDaysName.push("Monday");
    this.weekDaysName.push("Tuesday");
    this.weekDaysName.push("Wednesday");
    this.weekDaysName.push("Thursday");
    this.weekDaysName.push("Friday");
    this.weekDaysName.push("Saturday");
    this.weekDaysName.push("Sunday");
  }

  editor: EditorType = 'start';

  get showNoteEditor() {
    return this.editor === 'notes';
  }

  toggleEdit(type: EditorType) {
    this.editor = type;
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
    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  //method to get to the previous month
  onPreviousMonth() : void{
    this.monthNumber--;

    //Goes to December if month is January
    if (this.monthNumber < 1) {
      this.monthNumber = 11;
      this.year--;
    }

    //Sets month to new month
    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  onButton()
  {
    //currently doesn't do anything
  }

 

  //private method that changes the calendar to a month determined by the user
   private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].yr;
  }
}

