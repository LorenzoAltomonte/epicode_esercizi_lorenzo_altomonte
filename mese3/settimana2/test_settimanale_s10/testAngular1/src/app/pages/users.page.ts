
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/users';
import { getUsers } from '../users.service';
//import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  template:`
   <div class="container mt-4">
    <ul class="list-group">
      <li [routerLink]="[user.id]" routerLinkActive="active" class="list-group-item" *ngFor="let user of users">
        {{user.name}}
      </li>
    </ul>
    <hr>
    <router-outlet></router-outlet>
  </div>
  `
  ,
  styles: []
})
export class UsersPage implements OnInit {

  users!: Users[];
  constructor(private router: Router) {
    getUsers().then((users) => {
      this.users = users;
      this.router.navigate([/users/id])
    });
  }



  ngOnInit(): void {
  }

}
