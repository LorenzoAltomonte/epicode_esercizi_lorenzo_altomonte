import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-card',
  template: `
    <div
      [ngClass]="{
        'bg-warning': post.type == 'news',
        'bg-info': post.type == 'education',
        'bg-dark': post.type == 'politics',
        'text-white': post.type == 'politics'
      }"
      class="card mb-4"
    >
    <h5 class="card-header" > <span appSfondo>Post</span> </h5>
    <div class="card-body">
    <h5 class="card-title">{{post.title | uppercase }}</h5>
    <p class="card-text">{{post.body}}</p>

      <ng-content></ng-content>

    </div>

    </div>
  `,
  styles: [
  ]
})
export class PostCardComponent implements OnInit {
  @Input() post!: Post;
  // @Input() bgColor!: string;

  constructor() { }

  ngOnInit(): void {
  }

}