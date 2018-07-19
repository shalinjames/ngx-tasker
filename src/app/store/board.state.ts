import { State, Action, StateContext, NgxsOnInit, Selector } from "@ngxs/store";
import uuidv4 from "uuid/v4";

import { AddBoard } from "./board.actions";
import { BoardListService } from "../board-list/board-list.service";

export class BoardStateModel {
  boards: {};
}

@State<BoardStateModel>({
  name: "boardState",
  defaults: {
    boards: {}
  }
})
export class BoardState implements NgxsOnInit {
  constructor(private boardListSer: BoardListService) {}
  ngxsOnInit(ctx: StateContext<BoardStateModel>) {
    const state = ctx.getState();
    this.boardListSer.getBoards().subscribe(boards => {
      ctx.setState({
        ...state,
        boards
      });
    });
  }

  @Selector()
  static getBoards(state: BoardStateModel) {
    return state.boards;
  }
  @Action(AddBoard)
  addBoard(ctx: StateContext<BoardStateModel>, action: AddBoard) {
    const state = ctx.getState();
    const id = uuidv4();
    ctx.patchState({
      boards: {
        ...state.boards,
        [id]: { id, title: action.name, lanes: [], path: id }
      }
    });
  }
}

1;
