import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MockServiceService } from 'src/app/services/mock-service.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { TodoAction } from 'src/app/stores/todo/todo.actions';
import { Store, NgxsModule } from '@ngxs/store';
import { TodoState } from 'src/app/stores/todo/todo.state';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ],
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot([TodoAction])
      ],
      providers:[
        { provide: MockServiceService, useClass: MockSerivceService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


class MockSerivceService{

  getData(){
    return of([]);;
  }
} 