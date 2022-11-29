import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
    selector: 'app-attivi',
    templateUrl: './attivi.component.html',
    styleUrls: ['./attivi.component.scss'],
})
export class AttiviComponent implements OnInit {
    posts: Post[] = [];
    constructor(private postService: PostService) {}

    ngOnInit(): void {
        this.postService.getPost().subscribe((res) => {
            console.log(res);
            this.posts = res;

        });

    }

}
