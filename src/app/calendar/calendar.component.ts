import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export type EditorType = 'previous' | 'current' | 'next';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Each element represents the days in each month. January, Feburary, etc...
  calendar = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  editor: EditorType = 'current';

  
  toggleEditor(type: EditorType) {
    this.editor = type;
  }

  get showPreviousEditor() {
    return this.editor === 'previous';
  }

  get showCurrentEditor() {
    return this.editor === 'current';
  }

  get showNextEditor() {
    return this.editor === 'next';
  }



  //Array to hold all of the calendars 

  
  

}
