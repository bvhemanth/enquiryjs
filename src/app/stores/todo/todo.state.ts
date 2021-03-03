import { State, Action, Selector, StateContext } from '@ngxs/store';
import { TodoAction } from './todo.actions';
import * as action from './todo.actions';


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
