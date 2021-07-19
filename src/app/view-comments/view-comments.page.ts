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
  time: string;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    console.log(this.comments);

   }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getPosts(id);
    this.post = this.data.getMessageById(parseInt(id, 10));
    this.time = this.formatAMPM(new Date);
  }

  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
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
