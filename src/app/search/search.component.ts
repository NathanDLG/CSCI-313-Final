import { Component, OnInit } from '@angular/core';
import { UserTemplate } from '../UserTemplate';
import { UserService } from '../_services/user.service';


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

  filter(input : string){
    this.temp = input.slice(0, 3);
    this.filteredArray = [];
    

    for(this.i = 0; this.i < this.userArray.length - 1 ; this.i ++){
      
      this.userArray.find(el => el.fname == this.temp);


    }



    
  }

}
