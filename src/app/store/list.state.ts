import {
  State,
  Action,
  StateContext,  
  Selector,
  Store
} from "@ngxs/store";
import produce from "immer";
import uuidv4 from "uuid/v4";

import { List } from "../types";
import { UpdateListTitle, AddListType } from "./list.action";
import { AddListTypeToBoard } from "./board.actions";
import { AppUserState } from "./app.user.state";

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
    const boardId = this.store.selectSnapshot(AppUserState.getSelectedBoardId);
    patchState(
      produce(getState(), draft => {
        draft.list[id] = { title: action.title, belongTo: boardId };
      })
    );
    this.store.dispatch(new AddListTypeToBoard(id));
  }
}
