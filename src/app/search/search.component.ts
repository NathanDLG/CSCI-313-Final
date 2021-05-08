import { Component, OnInit } from '@angular/core';
import { UserTemplate } from '../UserTemplate';
import { UserService } from '../_services/user.service';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.userArray = this.service.getUsers();

  }

  userArray : UserTemplate[];


i : number ; 
temp : string;
filteredArray : UserTemplate[];
index : number;

user$: Observable<UserTemplate[]>;
private searchin = new Subject<string>();





  filter(value : string){

  // this.temp = this.userArray(UserTemplate.fname);

    

    for(this.i = 0; this.i < this.userArray.length - 1 ; this.i ++){
      
      this.userArray.find(el => el.fname == this.temp);


    }



    
  }

}
