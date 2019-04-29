import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

    @Input() title: string;
    @Input() content: string;
    @Input() loveIts = 0;
    @Input() createdAt = new Date();

    constructor() { }

  ngOnInit() {
  }
  lovIt() {
    this.loveIts += 1;
    console.log(this.loveIts);
  }
  dontLovIt() {
    this.loveIts -= 1;
    console.log(this.loveIts);
  }
}
