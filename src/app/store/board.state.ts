import { State, Action, StateContext, NgxsOnInit, Selector } from "@ngxs/store";
import uuidv4 from "uuid/v4";
import produce from "immer";

import { Boards } from "../types";
import {
  AddBoard,
  SelectBoard,
  UpdateBoardTitle,
  AddListTypeToBoard
} from "./board.actions";
import { BoardListService } from "../webservices/boardlist/board-list.service";
import { UsersService } from "../webservices/users/users.service";

export class BoardStateModel {
  boards: Boards;
  user: {
    boards: Array<number>;
  };
  selectedboardId: string;
}

@State<BoardStateModel>({
  name: "boardState",
  defaults: {
    boards: {},
    user: {
      boards: []
    },
    selectedboardId: null
  }
})
export class BoardState implements NgxsOnInit {
  constructor(
    private boardListSer: BoardListService,
    private userService: UsersService
  ) {}

  ngxsOnInit({ patchState }: StateContext<BoardStateModel>) {
    this.boardListSer.getBoards().subscribe(boards => {
      patchState({
        boards
      });
    });

    this.userService.get().subscribe(user => {
      patchState({ user });
    });
  }

  @Selector()
  static getBoards(state: BoardStateModel) {
    const boards = {};
    state.user.boards.map(board => {
      boards[board] = state.boards[board];
    });
    return boards;
  }
  @Action(AddBoard)
  addBoard(
    { getState, patchState }: StateContext<BoardStateModel>,
    action: AddBoard
  ) {
    const id = uuidv4();
    patchState(
      produce(getState(), draft => {
        draft.boards[id] = { id, title: action.name, list: [] };
        draft.user.boards.push(id);
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
