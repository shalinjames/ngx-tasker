import { State, Action, StateContext, NgxsOnInit, Selector } from "@ngxs/store";
import uuidv4 from "uuid/v4";

import { Board, Boards } from "../board/Board";
import { AddBoard } from "./board.actions";
import { BoardListService } from "../board-list/board-list.service";
import { UsersService } from "../webservices/users.service";

export class BoardStateModel {
  boards: Boards;
  user: {
    boards: Array<number>;
  };
}

@State<BoardStateModel>({
  name: "boardState",
  defaults: {
    boards: {},
    user: {
      boards: []
    }
  }
})
export class BoardState implements NgxsOnInit {
  constructor(
    private boardListSer: BoardListService,
    private userService: UsersService
  ) {}

  ngxsOnInit(ctx: StateContext<BoardStateModel>) {
    const state = ctx.getState();
    this.boardListSer.getBoards().subscribe(boards => {
      ctx.setState({
        ...state,
        boards
      });
    });

    this.userService.get().subscribe(user => {
      ctx.patchState({ user });
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
  addBoard(ctx: StateContext<BoardStateModel>, action: AddBoard) {
    const state = ctx.getState();
    const id = uuidv4();
    ctx.patchState({
      boards: {
        ...state.boards,
        [id]: { id, title: action.name, lanes: [], path: id }
      },
      user: {
        ...state.user,
        boards: [...state.user.boards, id]
      }
    });
  }
}

1;
