import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AttiviComponent } from './components/attivi/attivi.component';
import { InattiviComponent } from './components/inattivi/inattivi.component';
import { Route , RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';

const ROUTES:Route[] = [
  {
    path:"",
    component:HomeComponent
  },
{
  path:"attivi",
  component:AttiviComponent
},
{
  path:"inattivi",
  component:InattiviComponent
},


]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AttiviComponent,
    InattiviComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
