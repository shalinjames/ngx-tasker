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

import { List } from "../types";
import { UpdateBoardList, UpdateListTitle, AddListType } from "./list.action";
import { AddListTypeToBoard } from "./board.actions";
import { BoardListService } from "../webservices/boardlist/board-list.service";

export class ListStateModel {
  list: List;
  selectedList: Array<string>;
}

@State<ListStateModel>({
  name: "listState",
  defaults: {
    list: {},
    selectedList: []
  }
})
export class ListState {
  constructor(private boardListSer: BoardListService, private store: Store) {}

  @Action(UpdateBoardList)
  updateBoardList(
    { patchState }: StateContext<ListStateModel>,
    action: UpdateBoardList
  ) {
    return this.boardListSer.getList().subscribe(list => {
      const boardList = {};
      for (const key in list) {
        if (list[key].belongTo == action.boardId) {
          boardList[key] = list[key];
        }
      }
      patchState({
        list: boardList
      });
      console.log("patching state", list, boardList);
    });
  }

  @Selector()
  static getSelectedList(state: ListStateModel) {
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
        draft.list[id] = { title: action.title, belongTo: action.boardId };
      })
    );
    this.store.dispatch(new AddListTypeToBoard(id));
  }
}
