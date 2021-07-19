import { Component } from '@angular/core';
import { DataService, Message, Post, User } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  names: Array<string>;
  users: Array<User>;
  posts: Array<Post>;
  isFullListShown = false;
  isClick: any;

  private loading: any;

  constructor(
    private data: DataService,
    private http: HttpClient,
    public loadingCtrl: LoadingController
    ) {
    this.getUsers();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  getUsers(){
    this.presentLoading();

    this.http
      .get<any>('https://jsonplaceholder.typicode.com/users')
      .pipe(map(resData => {
        this.users = resData;
        return resData.map(user => user.name = this.nameParser(user.name));
      }))
      .subscribe(parsedData => {
        this.names = parsedData;
        this.dismissLoading();
    });
  }

  getPosts(userId){
    this.isFullListShown = false;
    this.presentLoading();
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => this.posts = data);
      // Calling posts by userId will return only one post instead of a list of posts
      // .get<any>(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      // .subscribe(data => this.posts.push(data));

    this.onClick(userId);
  }

  nameParser(fullName){
    const titles = ['Mr.', 'Mrs.', 'Miss'];
    let titleIndex: number;
    let hasTitle = false;

    titles.forEach(title => {
      if(fullName.includes(title)){
        titleIndex = title.length + 1;
        return hasTitle = true;
      }
    });

    if (hasTitle){
      return fullName.slice(titleIndex).split(' ')[0];
    }
    return fullName.split(' ')[0];
  }

  presentLoading(){
    this.loadingCtrl.create({
      message: 'Loading Users...',
      duration: 1000
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });
  }

   onClick(userId){
    this.isClick = userId;
   }

   isClicked(){
    return this.isClick;
   }

  dismissLoading(){
    if(this.loading){
      this.loading.dismiss();
    }
  }
}
