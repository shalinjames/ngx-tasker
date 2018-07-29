import { State, Action, StateContext, NgxsOnInit, Selector } from "@ngxs/store";

import { List } from "../types";
import { UpdateBoardList } from "./list.action";
import { BoardListService } from "../webservices/boardlist/board-list.service";

export class ListStateModel {
  list: List;
  selectedList: List;
}

@State<ListStateModel>({
  name: "listState",
  defaults: {
    list: {},
    selectedList: {}
  }
})
export class ListState implements NgxsOnInit {
  constructor(private boardListSer: BoardListService) {}

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
      selectedList
    });
  }
  @Selector()
  static getSelectedList(state: ListStateModel) {
    return state.selectedList;
  }
}
