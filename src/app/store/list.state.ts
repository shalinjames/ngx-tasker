import {
  State,
  Action,
  StateContext,
  NgxsOnInit,
  Selector,
  Store,
  Select
} from "@ngxs/store";
import produce from "immer";
import uuidv4 from "uuid/v4";

import { List, ListEntry } from "../types";
import { UpdateListTitle, AddListType } from "./list.action";
import { AddListTypeToBoard } from "./board.actions";
import { AppUserState } from "./app.user.state";
import { Observable } from "../../../node_modules/rxjs";

export class ListStateModel {
  list: List;
  selectedList: Array<any>;
}

@State<ListStateModel>({
  name: "list",
  defaults: {
    list: {},
    selectedList: []
  }
})
export class ListState {
  @Select(AppUserState.getSelectedBoardId) selectedBoardId$: Observable<string>;
  constructor(private store: Store) {}

  @Selector()
  static getList(state: ListStateModel) {
    return state.list;
  }

  @Action(UpdateListTitle)
  setListTitle(
    { getState, patchState }: StateContext<ListStateModel>,
    action: UpdateListTitle
  ) {
    patchState(
      produce(getState(), draft => {
        draft.list[action.listId].title = action.title;
      })
    );
  }
  @Action(AddListType)
  addListType(
    { getState, patchState }: StateContext<ListStateModel>,
    action: AddListType
  ) {
    const id = uuidv4();
    patchState(
      produce(getState(), draft => {
        draft.list[id] = { title: action.title, belongTo: "" };
      })
    );
    this.store.dispatch(new AddListTypeToBoard(id));
  }
}
