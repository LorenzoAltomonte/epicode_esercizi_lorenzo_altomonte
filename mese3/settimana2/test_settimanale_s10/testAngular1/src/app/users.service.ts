import { Injectable } from '@angular/core';
import { Users } from './models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
}
var users:Users[];

fetch('http://localhost:3000/utenti')
  .then((response) => response.json())
  .then((data) => users = data);

export async function getUsers() {
  return await (await fetch('http://localhost:3000/utenti')).json()
}
export async function getUsersById(users:Users[], id:number){
  return   users.find((e) => (e.id ==id))
}
