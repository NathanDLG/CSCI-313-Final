import { Day } from './calendar/day';

export interface CalendarTemplate {
  highlightedDays: Day[];
  userID: number;
  calendarID: number;
}
