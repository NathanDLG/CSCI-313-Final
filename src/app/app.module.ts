import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
=======
>>>>>>> 6f26718 (initial commit)
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
<<<<<<< HEAD
<<<<<<< HEAD
    BrowserModule,
    AppRoutingModule
=======
    BrowserModule
>>>>>>> 6f26718 (initial commit)
=======
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    // this provider used to create the fake backend
    fakeBackendProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
>>>>>>> 80ee479 (added the login component, authentication service, and some helper files)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
