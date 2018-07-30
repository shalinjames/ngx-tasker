import {
  State,
  Action,
  StateContext,
  NgxsOnInit,
  Selector,
  Store
} from "@ngxs/store";
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
export class ListState implements NgxsOnInit {
  constructor(private boardListSer: BoardListService, private store: Store) {}

  ngxsOnInit({ getState, setState }: StateContext<ListStateModel>) {
    this.boardListSer.getList().subscribe(list =>
      setState({
        ...getState(),
        list
      })
    );
  }

  @Action(UpdateBoardList)
  updateBoardList(
    { getState, patchState }: StateContext<ListStateModel>,
    action: UpdateBoardList
  ) {
    const state = getState();
    const selectedList = action.list.reduce((carry, listId) => {
      carry[listId] = state.list[listId];
      return carry;
    }, {});
    patchState({
      ...state,
      selectedList: action.list
    });
  }
  @Selector()
  static getSelectedList(state: ListStateModel) {
    const filtered = state.selectedList.reduce((carry, listId) => {
      carry[listId] = state.list[listId];
      return carry;
    }, {});
    return filtered;
  }

  @Action(UpdateListTitle)
  setListTitle(
    { getState, patchState }: StateContext<ListStateModel>,
    action: UpdateListTitle
  ) {
    const state = getState();
    patchState({
      list: {
        ...state.list,
        [action.listId]: {
          ...state.list[action.listId],
          title: action.title
        }
      }
    });
  }
  @Action(AddListType)
  addListType(
    { getState, patchState }: StateContext<ListStateModel>,
    action: AddListType
  ) {
    const state = getState();
    const id = uuidv4();
    patchState({
      list: {
        ...state.list,
        [id]: {
          title: action.title
        }
      }
    });
    this.store.dispatch(new AddListTypeToBoard(id));
  }
}
