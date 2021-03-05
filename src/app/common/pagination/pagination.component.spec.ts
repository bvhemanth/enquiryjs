import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { TodoAction } from 'src/app/stores/todo/todo.actions';
import { Action, NgxsModule, State, StateContext, Store, Selector } from '@ngxs/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import * as action from 'src/app/stores/todo/todo.actions';

fdescribe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent ],
      imports:[
        NgxsModule.forRoot([TodoState])
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    store = TestBed.inject(Store);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


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