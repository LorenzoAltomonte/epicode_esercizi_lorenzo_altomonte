import { Post } from './models/post';
import { ActivatedRoute } from '@angular/router';
import { ActivePostsPage } from './pages/active-posts.page';
import { Component, OnInit, Input } from '@angular/core';
import { getPosts, getPostsById } from './posts.service';

@Component({
  selector: 'app-dettaglio',
  template: `

    <div class="container">

      <div class="card-body mt-5">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.body }}</p>
        <p class="card-text">Autore: {{ post.autor }}</p>
        <p class="card-text">Tipologia: {{ post.type }}</p>

        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [],
})
export class DettaglioComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  post!: Post | any;

  id!: number;
  posts!: Post[];

  async ngOnInit() {
    this.route.params.subscribe((param) => {
      this.id = Number(param.id);
    });
    const posts = await getPosts();
    this.posts = posts;

    this.post = await getPostsById(posts, this.id);
  }
}
