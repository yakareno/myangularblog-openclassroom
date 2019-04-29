import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
  }

  title = 'My Blog';
  posts = [
  {
    title: 'Test1',
    content: 'Mon premier post',
    loveIts: 1,
    created_at: new Date()
  },
    {
      title: 'Test2',
      content: 'Mon deuxième post',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Test3',
      content: 'Mon troisième post',
      loveIts: 0,
      created_at: new Date()
    }];
}
