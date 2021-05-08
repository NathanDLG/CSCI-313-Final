import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { CalendarComponent } from './calendar/calendar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { fakeBackendProvider } from './_helpers';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { MyCalendarsComponent } from './my-calendars/my-calendars.component';
<<<<<<< HEAD
import { NotesComponent } from './notes/notes.component';
=======
import { NewCalendarComponent } from './new-calendar/new-calendar.component';
>>>>>>> 6710b10959e5edf00be978edc597d2037b7ff06f

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CalendarComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    MyCalendarsComponent,
<<<<<<< HEAD
    NotesComponent,
=======
    NewCalendarComponent,
>>>>>>> 6710b10959e5edf00be978edc597d2037b7ff06f

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    RouterModule.forRoot([
      { path : 'calendar', component: CalendarComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: '/register', pathMatch: 'full'},
      { path: 'home', component: HomeComponent}
    ]),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    fakeBackendProvider
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
