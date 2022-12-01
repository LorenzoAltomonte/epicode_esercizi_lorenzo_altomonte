import { Post } from './models/post';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivePostsPage } from './pages/active-posts.page';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dettaglio',
  template: `
    <p>
      dettaglio works!
    </p>
   <div >

   </div>

  `,
  styles: [
  ]
})
export class DettaglioComponent implements OnInit {
  // posts!: Post[];

  constructor() { }

  ngOnInit(): void {


  }


}
