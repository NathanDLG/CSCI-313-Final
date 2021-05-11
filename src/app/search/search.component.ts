import { Component, OnInit } from '@angular/core';
import { UserTemplate } from '../UserTemplate';
import { UserService } from '../_services/user.service';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import {CalendarsService } from '../calendars.service';
import { CalendarTemplate } from '../CalendarTemplate';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service: UserService, private serviceCal : CalendarsService) { }

  ngOnInit(): void {
    this.userArray = this.service.getUsers();
    this.calendarArraylocal = this.serviceCal.getCalendars();

  }

  userArray : UserTemplate[];
  calendarArraylocal : CalendarTemplate[]; 

i : number ; 
temp : string;
filteredArray : UserTemplate[];
searchnum : number;

user$: Observable<UserTemplate[]>;

coolArray : number[];


  onSubmit(value : string){
   this.searchnum = parseInt(value);


    for(let i = 0; i < this.userArray.length; i++){
        if(this.calendarArraylocal[i].userID === this.searchnum)
          {
            this.coolArray.push(this.searchnum);
          }
          this.coolArray.push(this.searchnum);
    }
      
      



    


  }


  filter(value : string){

  // this.temp = this.userArray(UserTemplate.fname);

    

    for(this.i = 0; this.i < this.userArray.length - 1 ; this.i ++){
      
      this.userArray.find(el => el.fname == this.temp);


    }



    
  }

}
