import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MockServiceService } from 'src/app/services/mock-service.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import * as action from 'src/app/stores/todo/todo.actions';
import { Action, NgxsModule, State, StateContext, Store, Selector } from '@ngxs/store';
import { By } from '@angular/platform-browser';

fdescribe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let store;
  const event = new KeyboardEvent('keyup', {
    bubbles : true, cancelable : true, shiftKey : false
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ],
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot([TodoState])
      ],
      providers:[
        { provide: MockServiceService, useClass: MockSerivceService },
        // { provide: TodoAction, useClass: MockTodoAction}
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    store = TestBed.inject(Store);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('shoud call search method',()=>{
    const search = spyOn(component, 'search').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    expect(search).toHaveBeenCalled();
  });
  it('should call keyup event',()=>{
    const search = spyOn(component, 'search').and.callThrough();
    let input = fixture.debugElement.query(By.css('#search'));
    const inputElement = input.nativeElement;
    inputElement.value = "Regional";
    component.searchText =  inputElement.value
    fixture.detectChanges();
    inputElement.dispatchEvent(event);
    console.log(inputElement.value);
    expect(search).toHaveBeenCalled();
  })
});


class MockSerivceService{
  getData(){
    return of([[
      {
        "name": "Customer Assurance Liaison",
        "image": "http://lorempixel.com/640/480",
        "description": "Vel voluptatem id repudiandae aut omnis. Deleniti tempore aliquam quia magnam eos. Sunt saepe nisi delectus.",
        "dateLastEdited": "2018-05-19T12:33:25.545Z"
      },
      {
        "name": "Dynamic Infrastructure Designer",
        "image": "http://lorempixel.com/640/480",
        "description": "Quaerat in rerum. Possimus reprehenderit provident ea voluptatem qui et enim. Ducimus ea soluta esse modi quia.",
        "dateLastEdited": "2017-11-28T04:59:13.759Z"
      },
      {
        "name": "Regional Configuration Designer",
        "image": "http://lorempixel.com/640/480",
        "description": "Rerum voluptatibus deleniti. Et quo ea magnam quisquam aliquam sequi sed praesentium. Similique est maiores. Tempora sed ad dolores error deserunt possimus sed perferendis molestiae. Doloribus fuga velit ipsum voluptatem ut ducimus.",
        "dateLastEdited": "2018-07-27T21:33:53.485Z"
      },
      {
        "name": "District Metrics Executive",
        "image": "http://lorempixel.com/640/480",
        "description": "Odit repudiandae et nemo voluptas quae. Voluptatibus inventore iure deserunt aliquid qui esse. Impedit molestias ea sed. Neque perspiciatis excepturi odit. Quibusdam facere dolor. Adipisci recusandae recusandae.",
        "dateLastEdited": "2018-07-14T21:01:42.717Z"
      },
      {
        "name": "International Brand Analyst",
        "image": "http://lorempixel.com/640/480",
        "description": "Fuga cupiditate dolorum eos. Quia vel et eos qui tempora. Et et et et alias at suscipit. Corporis eum nostrum recusandae similique rerum sit perferendis ut. Qui excepturi laborum est et fugit laborum.",
        "dateLastEdited": "2018-04-18T08:53:42.053Z"
      },
      {
        "name": "Human Factors Analyst",
        "image": "http://lorempixel.com/640/480",
        "description": "Quis eos in repudiandae. Dicta dolore rerum unde sapiente. Consequatur ea rerum non alias et sapiente dolore aliquid. Eius quia delectus porro id non voluptas.",
        "dateLastEdited": "2018-07-27T05:58:52.006Z"
      },
      {
        "name": "Human Data Designer",
        "image": "http://lorempixel.com/640/480",
        "description": "Vero enim dignissimos. Numquam harum facilis delectus itaque dolore libero omnis asperiores aut. Deserunt quas dolore omnis quibusdam aut. A nihil expedita repellat eaque unde eveniet voluptatum harum.",
        "dateLastEdited": "2018-06-05T03:48:43.495Z"
      },
      {
        "name": "Dynamic Identity Specialist",
        "image": "http://lorempixel.com/640/480",
        "description": "Quasi temporibus hic et accusantium. Ea et ullam illum esse quae ea adipisci. Rerum nihil quod ex error voluptatem voluptatem et culpa. Nemo voluptatem veritatis fugiat molestiae officiis adipisci. Perferendis et sed illum.",
        "dateLastEdited": "2018-01-02T05:52:11.738Z"
      },
      {
        "name": "Chief Brand Orchestrator",
        "image": "http://lorempixel.com/640/480",
        "description": "Doloremque consequatur expedita excepturi dolores debitis. Aperiam illum dolorum officia officia consequatur sint reiciendis. Ut veniam eos nam vel. Beatae sit qui tenetur. Fugit illum cum. Vitae cupiditate maiores aut pariatur corporis.",
        "dateLastEdited": "2017-10-15T21:10:51.560Z"
      },
      {
        "name": "Legacy Metrics Agent",
        "image": "http://lorempixel.com/640/480",
        "description": "Animi omnis et aliquid sunt aut dolorem sit non blanditiis. Vel odio dolor excepturi quos voluptatibus est voluptas quis vitae. Id fugiat quam quo quisquam corrupti. Laborum veritatis autem voluptatem et.",
        "dateLastEdited": "2018-07-15T12:27:12.644Z"
      },
      {
        "name": "Regional Intranet Developer",
        "image": "http://lorempixel.com/640/480",
        "description": "Corrupti voluptates sint esse voluptatem sed hic sint. Esse ad optio. Eius et mollitia rem voluptatum.",
        "dateLastEdited": "2018-09-21T11:13:56.528Z"
      },
      {
        "name": "Human Directives Analyst",
        "image": "http://lorempixel.com/640/480",
        "description": "Sint accusamus sed quidem ab ut quis ut. Id unde eaque voluptatem pariatur sit blanditiis sequi. Repellat deserunt id autem blanditiis dicta eius quis et debitis. Culpa minus asperiores. Rerum delectus id magni consequatur quas voluptas ea tenetur et.",
        "dateLastEdited": "2018-07-25T16:58:58.248Z"
      },
      {
        "name": "Chief Optimization Specialist",
        "image": "http://lorempixel.com/640/480",
        "description": "Repudiandae aut et voluptas voluptas. Voluptas quod ad labore. Earum nihil sint. Deserunt sint voluptatem ratione tempora at eos provident et accusantium. Sunt tempora porro dolorem necessitatibus labore molestiae blanditiis. Labore quam molestiae quos vel omnis nihil.",
        "dateLastEdited": "2018-07-29T00:53:13.319Z"
      },
      {
        "name": "Future Division Director",
        "image": "http://lorempixel.com/640/480",
        "description": "Quibusdam at id sint voluptatem maxime inventore eos praesentium. Aliquam veritatis harum voluptate hic voluptas voluptate. Est delectus voluptas laborum maxime recusandae. Qui et enim numquam voluptate. Sint sed neque odit.",
        "dateLastEdited": "2018-05-03T22:18:42.033Z"
      },
      {
        "name": "Dynamic Metrics Designer",
        "image": "http://lorempixel.com/640/480",
        "description": "Consequatur expedita velit asperiores maxime. Enim fuga qui error eum qui nobis. Et quod quidem quia et aut temporibus officia optio officiis. Quia porro aut velit omnis maxime aut dolore dicta ut.",
        "dateLastEdited": "2018-05-30T16:08:49.672Z"
      },
      {
        "name": "Dynamic Marketing Consultant",
        "image": "http://lorempixel.com/640/480",
        "description": "Officia vero non illum nesciunt perferendis quia porro. Voluptatibus suscipit esse labore odit harum laudantium magni. Sit facere quia qui quam est nostrum sed dolorum.",
        "dateLastEdited": "2017-10-20T10:14:54.170Z"
      },
      {
        "name": "Investor Brand Executive",
        "image": "http://lorempixel.com/640/480",
        "description": "Vel ex explicabo. Quibusdam impedit ratione eligendi qui ea animi. Dolores molestiae non. Ipsum et vitae aperiam fugiat deleniti repellendus magnam animi. Illo esse dolores ad.",
        "dateLastEdited": "2017-12-26T16:08:21.252Z"
      },
      {
        "name": "Investor Quality Executive",
        "image": "http://lorempixel.com/640/480",
        "description": "Voluptatem itaque eos voluptatibus. Sunt ea molestiae consequatur quidem et sequi vero. Id blanditiis aspernatur iure ea officia dolores deleniti. Porro autem molestias animi eum et atque et. Fuga et culpa.",
        "dateLastEdited": "2017-10-29T03:07:31.136Z"
      },
      {
        "name": "Global Interactions Producer",
        "image": "http://lorempixel.com/640/480",
        "description": "Aliquam sit quam veniam consequatur voluptatibus fugit repellat ut. Impedit quia culpa et quia sapiente cum autem vitae. Aliquid error provident vel quod quibusdam. Quis eum quis est cum qui.",
        "dateLastEdited": "2018-03-25T11:35:31.378Z"
      },
      {
        "name": "District Data Officer",
        "image": "http://lorempixel.com/640/480",
        "description": "Perspiciatis suscipit eius. Atque dolorem eligendi rerum et aut laborum et quidem. Excepturi minima omnis debitis necessitatibus suscipit voluptatem neque.",
        "dateLastEdited": "2018-01-19T11:21:04.700Z"
      },
      {
        "name": "Investor Brand Planner",
        "image": "http://lorempixel.com/640/480",
        "description": "Recusandae quibusdam cum voluptatem nisi et veritatis assumenda iusto. Optio pariatur pariatur eveniet non voluptate ipsum corporis. Consequatur et commodi ut enim molestiae maiores culpa iure. Qui dolor distinctio ex perferendis omnis soluta sunt omnis accusantium. Sequi adipisci voluptate sunt minus et aut vel.",
        "dateLastEdited": "2018-07-01T02:45:03.972Z"
      },
      {
        "name": "Chief Identity Technician",
        "image": "http://lorempixel.com/640/480",
        "description": "Ipsum quis blanditiis enim. Ut ut nisi laborum impedit veritatis. Quia pariatur laboriosam iure esse est necessitatibus velit. Voluptates et nam occaecati eius ut repudiandae saepe quo. Non velit delectus voluptatem sint fugit facilis.",
        "dateLastEdited": "2018-05-30T02:46:09.709Z"
      },
      {
        "name": "Legacy Optimization Strategist",
        "image": "http://lorempixel.com/640/480",
        "description": "Explicabo voluptas et rem expedita voluptatum. Sunt excepturi tempora dicta id voluptates blanditiis voluptas quia quo. Qui officiis et. Quibusdam ut perferendis exercitationem aperiam. Omnis voluptas quos dolorem ut molestias.",
        "dateLastEdited": "2018-03-21T01:39:59.868Z"
      },
      {
        "name": "Global Operations Liaison",
        "image": "http://lorempixel.com/640/480",
        "description": "Recusandae aut voluptas velit tempora mollitia. Culpa aut eius repudiandae ab molestias earum. Unde in sit tempora et.",
        "dateLastEdited": "2018-06-16T06:28:24.120Z"
      },
      {
        "name": "Human Brand Liaison",
        "image": "http://lorempixel.com/640/480",
        "description": "Iure id sapiente quae et alias nam sit. Qui harum dolorem sapiente magnam id qui dolores dolorem voluptatem. Excepturi ea nesciunt quo ab voluptates sint amet dignissimos. Corrupti reiciendis odit.",
        "dateLastEdited": "2018-01-17T19:45:09.541Z"
      },
      {
        "name": "Internal Assurance Manager",
        "image": "http://lorempixel.com/640/480",
        "description": "Excepturi distinctio tempora numquam praesentium necessitatibus ipsum. Molestiae amet saepe odio vero et laboriosam ipsum. Doloremque distinctio molestiae optio.",
        "dateLastEdited": "2018-09-26T09:54:00.243Z"
      },
      {
        "name": "Legacy Usability Engineer",
        "image": "http://lorempixel.com/640/480",
        "description": "Hic tempora dolore. Odio sequi ut. Eaque nobis est exercitationem et reiciendis saepe quo. Saepe nulla quidem aut dolor architecto vero quas dolores. Culpa atque odit vitae quod.",
        "dateLastEdited": "2017-11-19T04:29:23.828Z"
      },
      {
        "name": "Regional Paradigm Developer",
        "image": "http://lorempixel.com/640/480",
        "description": "Nulla veniam rerum nihil et vel cupiditate. Sunt dolorem quaerat assumenda exercitationem tempore. Ut qui eveniet cupiditate quam qui beatae. Cumque et nihil autem vel ut et qui. Qui voluptatem dolores temporibus assumenda vel odit.",
        "dateLastEdited": "2018-03-27T13:05:43.761Z"
      },
      {
        "name": "Central Implementation Coordinator",
        "image": "http://lorempixel.com/640/480",
        "description": "Aut et voluptatum laudantium labore et. Molestiae modi esse qui. Ex quidem animi. Dolore consequatur ut occaecati rem id rem est quia quidem. Sit in delectus et vero. Sed quibusdam asperiores ut.",
        "dateLastEdited": "2018-04-25T06:05:37.034Z"
      },
      {
        "name": "Direct Data Facilitator",
        "image": "http://lorempixel.com/640/480",
        "description": "Sint atque minus qui officiis. Numquam recusandae sint sit est harum consectetur. Qui sequi veniam nihil porro temporibus commodi illo praesentium ab. Et eum aut nihil fugit voluptates deserunt explicabo dolore. Qui neque quis quasi voluptates et beatae atque rerum. Temporibus soluta repellat.",
        "dateLastEdited": "2018-01-21T15:58:42.942Z"
      },
      {
        "name": "District Applications Representative",
        "image": "http://lorempixel.com/640/480",
        "description": "Libero optio nihil minima corporis aspernatur fugiat quia. Ea qui cupiditate impedit provident quas et accusamus occaecati quidem. Ut corrupti eum corporis id velit necessitatibus voluptatem est quibusdam. Deleniti qui quam perferendis reprehenderit ut.",
        "dateLastEdited": "2018-06-13T05:21:41.581Z"
      },
      {
        "name": "Regional Marketing Developer",
        "image": "http://lorempixel.com/640/480",
        "description": "Consequatur enim quo. Vitae non autem quas. Omnis accusantium suscipit consequatur eaque ut voluptatibus est. Qui non atque quasi. Ut rerum aut totam temporibus. Beatae aliquam voluptatem dolorum nobis quia omnis deleniti esse voluptas.",
        "dateLastEdited": "2018-10-05T01:06:12.605Z"
      },
      {
        "name": "Corporate Integration Specialist",
        "image": "http://lorempixel.com/640/480",
        "description": "Dolor nihil ex culpa quam perferendis aut id perferendis laborum. Provident dolor eos nesciunt libero perspiciatis. Est commodi enim expedita molestiae ea necessitatibus quod voluptatem.",
        "dateLastEdited": "2017-12-07T00:39:04.794Z"
      },
      {
        "name": "Chief Security Agent",
        "image": "http://lorempixel.com/640/480",
        "description": "Aspernatur at debitis aliquam dolor labore quia. Quaerat tenetur qui quis. Laudantium tempore qui praesentium veritatis doloremque consequatur possimus quasi. Iure aspernatur atque tenetur itaque error aut natus harum.",
        "dateLastEdited": "2018-06-22T11:24:11.391Z"
      },
      {
        "name": "Senior Marketing Director",
        "image": "http://lorempixel.com/640/480",
        "description": "Quia fuga et et exercitationem officiis soluta repellendus et ut. Quas nam sint quo magni nihil laboriosam reiciendis voluptatem fugit. Dolores et facilis architecto. Voluptate eum nam exercitationem quis voluptatem rerum laborum.",
        "dateLastEdited": "2018-02-05T03:50:27.307Z"
      },
      {
        "name": "Lead Solutions Engineer",
        "image": "http://lorempixel.com/640/480",
        "description": "Facere ducimus facilis molestiae. Pariatur optio hic pariatur velit accusamus. Fugit ratione blanditiis delectus. Architecto dolor omnis. Minima reiciendis eos quos. Quis tempore libero sed odit animi vitae enim porro eos.",
        "dateLastEdited": "2017-10-16T22:16:25.514Z"
      },
      {
        "name": "Human Configuration Developer",
        "image": "http://lorempixel.com/640/480",
        "description": "Qui nesciunt ab rerum enim. Minima dolorum optio repellat molestiae sunt. Molestias ut ratione ut.",
        "dateLastEdited": "2017-12-14T16:47:17.612Z"
      },
      {
        "name": "Future Program Assistant",
        "image": "http://lorempixel.com/640/480",
        "description": "Commodi aperiam perferendis modi dolor laudantium neque non hic non. Nam ducimus et. Enim eius autem quasi quia. Sed voluptatem illum dolore. Sit aliquid repellat cum illo nesciunt et recusandae aut iure.",
        "dateLastEdited": "2018-05-07T13:44:42.938Z"
      },
    ]
  ]);;
  }
} 

// class MockTodoAction{

// }

export interface TodoStateModel {
  //Stores
}

@State<TodoStateModel>({
  name: "Todo",
  defaults: {
    Stores:{
      searchText:null,
    },
  }
})
export class TodoState {

  @Selector()
  public static getState(state: TodoStateModel) {
    return state;
  }

  @Action(action.TodoAction)
  public add(ctx: StateContext<TodoStateModel>, actions: action.TodoAction) {
    const stateModel = ctx.getState();
    console.log(actions.payload)
    //stateModel.stores = [...stateModel.stores, payload];
    ctx.patchState({ ...stateModel, Stores:actions.payload});
  }
}
