import { State, Action, StateContext, NgxsOnInit, Selector } from "@ngxs/store";
import uuidv4 from "uuid/v4";

import { AddBoard } from "./board.actions";
import { Board } from "../board/Board";
import { BoardListService } from "../board-list/board-list.service";
import { StateContextFactory } from "../../../node_modules/@ngxs/store/src/internal/state-context-factory";

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
  @Action(AddBoard)
  static addBoard(ctx: StateContext<BoardStateModel>, name: AddBoard) {
    const state = ctx.getState();
    const id = uuidv4();
    console.log(id, "From Store", name);
    ctx.patchState({
      boards: {
        ...state.boards,
        [id]: { id, title: name, lanes: [], path: "sampels" }
      }
    });
  }
}

1;
