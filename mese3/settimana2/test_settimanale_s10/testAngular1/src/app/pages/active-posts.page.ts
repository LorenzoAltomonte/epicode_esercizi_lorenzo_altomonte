import { Post } from './../models/post';
import { Component, OnInit } from '@angular/core';
import { getPosts, changeStatus } from '../posts.service';

@Component({
  template: `
    <div class="container mt-5">
      <div *ngFor="let post of posts; let i = index">
        <app-post-card *ngIf="post.active" [post]="post">
          <button (click)="onInactivePost(post.id,i,post)" class="btn btn-primary">Disattiva</button>
          <button class="btn btn-primary mx-1" [routerLink]="['/active-posts',post.id]" routerLinkActive="active" (click)="viewDetails(i)">dettaglio</button>
        </app-post-card>
      </div>
    </div>

  `,
  styles: [],
})
export class ActivePostsPage implements OnInit {
  posts!: Post[];
  constructor() {

  }

  async ngOnInit() {
    const posts = await getPosts()
    this.posts=posts;
  }

  onInactivePost(id:number, i:number,post:Post){
    // updatePost({active:false},id)
    changeStatus(post)
    this.posts.splice(i,1)
  }
  viewDetails(i: number){
console.log(i);

  }
}
