import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getUsers, getUsersById } from '../users.service';

@Component({
  selector: 'app-users-details',
  template: `
    <p>
      users-details works!
    </p>
  `,
  styles: []
})
export class UsersDetailsPage implements OnInit {


  constructor(private route: ActivatedRoute) {}

  id!: number;
  // users!: Users[];

  async ngOnInit() {
    // this.route.params.subscribe((param) => {
    //   this.id = Number(param.id);
    // });
    // const posts = await getUsers();
    // this.users = users;

    // this.users= await getUsersById(users, this.id);
  }
}
