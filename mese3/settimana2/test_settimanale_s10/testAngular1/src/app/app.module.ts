import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { HomePage } from './pages/home.page';
import { ActivePostsPage } from './pages/active-posts.page';
import { InactivePostsPage } from './pages/inactive-posts.page';
import { PostCardComponent } from './components/post-card.component';
import { SfondoDirective } from './components/sfondo.directive';
import { DettaglioComponent } from './dettaglio.component';
import { UsersPage } from './pages/users.page';
import { UsersDetailsPage } from './pages/users-details.page';

const routes: Route[] = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'active-posts',
    component: ActivePostsPage,
  },
  {
    path: 'inactive-posts',
    component: InactivePostsPage,
  },

  { path: 'inactive-posts/:id',
  component: DettaglioComponent },

  { path: 'active-posts/:id',
   component: DettaglioComponent },

  { path: 'users',
   component: UsersPage,

  },

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePage,
    ActivePostsPage,
    InactivePostsPage,
    PostCardComponent,
    SfondoDirective,
    DettaglioComponent,
    UsersPage,
    UsersDetailsPage,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
