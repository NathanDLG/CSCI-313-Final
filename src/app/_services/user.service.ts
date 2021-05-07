import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserTemplate } from '../UserTemplate'; 


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }


    getAll() {
        return this.http.get<any[]>(`${config.apiUrl}/users`);
    }

    register(user) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }

    delete(id) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }


    // Pulls off of the UserTemplate and initializes into an array for preset users. 

    UserArray: UserTemplate[] = [
        
        {id: 1,
        fname: 'Mike',
        lname: 'Tyson',
        username: 'Mike_Tyson',
        password: 'Abc123'},

        {id: 2, 
        fname : 'Mary',
        lname : 'Walsh',
        username: 'MaryLeeWalsh',
        password: 'Password01'},

        {id: 3, 
        fname : "Lord", 
        lname : "Gaben",
        username: 'Gabe_Newell',
        password: '333'},
    ]

    tempID = 3; 
    removable;
    temp;
 
//Initializes w-Default values 
    getUsers(): UserTemplate[]{
        return this.UserArray;
    }

//Adds new users 
    setUser(newUser : UserTemplate){
        this.tempID = this.tempID + 1;
        newUser.id = this.tempID; 
        this.UserArray.push(newUser);
    }

//Remove Single User
    remove(id : number){
        this.removable = this.UserArray.find( x => x.id == id);
        this.temp = this.UserArray.indexOf(this.removable);
        this.UserArray.splice(this.temp, 1);
    }

//Find Single User
    getUser( id : number){
        return this.UserArray.find(x => x.id == id);
    }
    

}