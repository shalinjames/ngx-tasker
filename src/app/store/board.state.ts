import {
  State,
  Action,
  StateContext,
  Selector,
  Select,
  Store
} from "@ngxs/store";
import uuidv4 from "uuid/v4";
import produce from "immer";

import { Board } from "../types";
import {
  AddBoard,
  SelectBoard,
  UpdateBoardTitle,
  AddListTypeToBoard
} from "./board.actions";
import { BoardListService } from "../webservices/boardlist/board-list.service";
import { UsersService } from "../webservices/users/users.service";

export class BoardStateModel {
  [param: string]: Board;
}

@State<BoardStateModel>({
  name: "boards",
  defaults: {}
})
export class BoardState {
  constructor(
    private boardListSer: BoardListService,
    private userService: UsersService,
    private store: Store
  ) {}

  @Selector()
  static getBoards(state: BoardStateModel) {
    const boards = {};
    return state;
  }
  @Action(AddBoard)
  addBoard(
    { getState, patchState }: StateContext<BoardStateModel>,
    action: AddBoard
  ) {
    const id = uuidv4();
    patchState(
      produce(getState(), draft => {
        draft[id] = { id, title: action.name, list: [] };
      })
    );
  }

  @Action(SelectBoard)
  selectBoard(
    { patchState }: StateContext<BoardStateModel>,
    action: SelectBoard
  ) {
    patchState({
      selectedboardId: action.selectedBoardId
    });
  }

  @Selector()
  static getSelectedBoard(state: BoardStateModel) {
    return state.boards[state.selectedboardId];
  }

  @Action(UpdateBoardTitle)
  setBoardTItle(
    { getState, patchState }: StateContext<BoardStateModel>,
    action: UpdateBoardTitle
  ) {
    const state = getState();
    patchState(
      produce(state, draft => {
        draft.boards[state.selectedboardId].title = action.title;
      })
    );
  }

  @Action(AddListTypeToBoard)
  addListTypeToBoard(
    { getState, patchState }: StateContext<BoardStateModel>,
    action: AddListTypeToBoard
  ) {
    const state = getState();
    patchState(
      produce(state, draft => {
        draft.boards[state.selectedboardId].list.push(action.title);
      })
    );
  }
}
