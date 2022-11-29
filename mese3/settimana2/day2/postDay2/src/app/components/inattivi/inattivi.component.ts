import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from './../../services/post.service';

@Component({
  selector: 'app-inattivi',
  templateUrl: './inattivi.component.html',
  styleUrls: ['./inattivi.component.scss']
})
export class InattiviComponent implements OnInit {
  posts:Post [] = []
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPost().subscribe((res) => {
        console.log(res);
        this.posts = res;

    });

}

}
