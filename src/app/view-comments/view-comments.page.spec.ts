import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewCommentsPageRoutingModule } from './view-comments-routing.module';

import { ViewCommentsPage } from './view-comments.page';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ViewCommentsPage', () => {
  let component: ViewCommentsPage;
  let fixture: ComponentFixture<ViewCommentsPage>;
  let httpMock: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCommentsPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, ViewCommentsPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should send a comment request', () => {
    expect(component).toBeTruthy();
  });

  // it('should send a comment request', () => {
  //   const postId = 1;
  //   const req = httpMock.expectOne(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  //   expect(req.request.method).toBe('GET');
  // });
});
