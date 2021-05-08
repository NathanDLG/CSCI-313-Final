import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Day } from '../calendar/day';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() { }

  @Input() inputDay: Day;

  @Output() output = new EventEmitter<string>();
  ngOnInit(): void {
  }

  test()
  {
    this.output.emit();
  }

}
