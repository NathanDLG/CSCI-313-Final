import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { CalendarCreatorService } from '../calendar-creator.service';
import { Day } from '../calendar/day';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(public calendarCreator: CalendarCreatorService) { }

  public textbox: string;


  public note: string;

  public notesArray: string[];
  @Input() inputDay: number;

  @Output() output = new EventEmitter<string>();
  
  ngOnInit(): void {
    this.notesArray = this.calendarCreator.getNoteInfo();
    this.textbox = this.notesArray[this.inputDay - 1];
  }

  test(note: string)
  {
    this.calendarCreator.changeDayNotes(this.inputDay, note);
    this.output.emit(this.textbox);
  }

}
