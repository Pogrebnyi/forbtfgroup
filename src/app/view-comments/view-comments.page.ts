import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Message, Comment } from '../services/data.service';

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.page.html',
  styleUrls: ['./view-comments.page.scss'],
})
export class ViewCommentsPage implements OnInit {
  public post: Message;
  comments: Array<Comment>;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getPosts(id);
    this.post = this.data.getMessageById(parseInt(id, 10));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  getPosts(postId){
    this.http
      .get<any>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .subscribe(data => this.comments = data);
  }
}
