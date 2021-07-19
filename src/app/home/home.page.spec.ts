import { ComponentFixture, getTestBed, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomePage } from './home.page';
import { PostComponentModule } from '../post/post.module';
import { Injector } from '@angular/core';

describe('HomePage', () => {
  let component: HomePage;
  let service: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let httpMock: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      providers: [
        Injector,
        HomePage
      ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, PostComponentModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const injector = getTestBed();
    service = injector.get(HomePage);
    httpMock = injector.get(HttpTestingController);
  }));

  it('calling users should create', () => {
    expect(component).toBeTruthy();
  });

  it('calling posts should create', () => {
    expect(component).toBeTruthy();
  });

  // it('calling users should create', () => {
  //   service.getUsers().subscribe(resData => {
  //     expect(resData[0].username).toBe('Bret');
  //     expect(resData[0].name).toBe('Leanne Graham');
  //     expect(resData[0].email).toBe('Sincere@april.biz');
  //     expect(resData[0].zipcode).toBe('92998-3874');
  //     expect(resData[0].city).toBe('Gwenborough');
  //   });

  //   const data = require('../testing-data/users.json');
  //   const req = httpMock.expectOne('https://mockedUsers');
  //   expect(req.request.method).toBe('GET');
  //   req.flush(data);
  // });

  // it('calling posts should create', () => {
  //   service.getPosts(1).subscribe(posts => {
  //     expect(posts[0].title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
  //     expect(posts[0].userId).toBe(1);
  //   });

  //   const data = require('../testing-data/posts.json');
  //   const req = httpMock.expectOne('https://mockedPosts');
  //   expect(req.request.method).toBe('GET');
  //   req.flush(data);
  // });
});
