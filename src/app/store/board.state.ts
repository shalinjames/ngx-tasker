import { State, Action, StateContext, NgxsOnInit, Selector } from "@ngxs/store";

import { GetBoards } from "./board.actions";
import { Board } from "../board/Board";
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
      console.log("ngxsOnInit", boards);
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
}
