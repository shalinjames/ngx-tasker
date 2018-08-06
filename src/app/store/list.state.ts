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
import { UpdateBoardList, UpdateListTitle, AddListType } from "./list.action";
import { AddListTypeToBoard } from "./board.actions";
import { BoardListService } from "../webservices/boardlist/board-list.service";
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
export class ListState implements NgxsOnInit {
  @Select(AppUserState.getSelectedBoardId) selectedBoardId$: Observable<string>;
  constructor(private boardListSer: BoardListService, private store: Store) {}

  ngxsOnInit({ dispatch }: StateContext<ListStateModel>) {
    this.selectedBoardId$.subscribe(boardId => {
      if (boardId) {
        dispatch(new UpdateBoardList(boardId));
      }
    });
  }

  @Action(UpdateBoardList)
  updateBoardList(
    { getState, patchState }: StateContext<ListStateModel>,
    action: UpdateBoardList
  ) {
    const state = getState();
    const selectedList = Object.keys(state.list).reduce(
      (carryArr, listEntryId) => {
        if (state.list[listEntryId].belongTo == action.boardId) {
          carryArr.push({ id: listEntryId, ...state.list[listEntryId] });
        }
        return carryArr;
      },
      []
    );
    patchState({
      selectedList
    });
  }

  @Selector()
  static getSelectedList(state: ListStateModel) {
    return state.selectedList;
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
