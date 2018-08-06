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

import { Board, Boards } from "../types";
import {
  AddBoard,
  UpdateBoardTitle,
  AddListTypeToBoard
} from "./board.actions";
import { AppUserState } from "./app.user.state";

export class BoardStateModel {
  boards: Boards;
}

@State<BoardStateModel>({
  name: "boards",
  defaults: {
    boards: {}
  }
})
export class BoardState {
  constructor(private store: Store) {}

  get selectedBoardId(): string {
    const appUserState = this.store.selectSnapshot(AppUserState);
    return appUserState.selectedboardId;
  }

  @Selector()
  static getBoards(state: BoardStateModel) {
    return state.boards;
  }

  @Selector()
  static getSelectedBoard(boardId, state: BoardStateModel) {
    console.log(state);
    return state[boardId];
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

  @Action(UpdateBoardTitle)
  setBoardTItle(
    { getState, patchState }: StateContext<BoardStateModel>,
    action: UpdateBoardTitle
  ) {
    const state = getState();

    patchState(
      produce(state, draft => {
        draft.boards[this.selectedBoardId].title = action.title;
      })
    );
  }

  // @Action(AddListTypeToBoard)
  // addListTypeToBoard(
  //   { getState, patchState }: StateContext<BoardStateModel>,
  //   action: AddListTypeToBoard
  // ) {
  //   const state = getState();
  //   patchState(
  //     produce(state, draft => {
  //       draft.boards[state.selectedboardId].list.push(action.title);
  //     })
  //   );
  // }
}
