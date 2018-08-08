import {
  State,
  Action,
  StateContext,
  NgxsOnInit,
  Store,
  Selector
} from "@ngxs/store";
import { tap } from "rxjs/operators";

import { BoardListService } from "../webservices/boardlist/board-list.service";
import { Boards, List, Cards } from "../types";
import { BoardState } from "./board.state";
import { ListState } from "./list.state";
import { SetInitialUserState, SelectBoard } from "./user.actions";
import { CardState } from "./cards.state";

export class UserStateModel {
  boards: Boards;
  users: [string];
  list: List;
  cards: Cards;
  selectedboardId: string;
}

@State<UserStateModel>({
  name: "user",
  children: [BoardState, ListState, CardState]
})
export class UserState implements NgxsOnInit {
  constructor(private boardListSer: BoardListService, store: Store) {}

  ngxsOnInit({ dispatch }: StateContext<UserStateModel>) {
    dispatch(new SetInitialUserState());
  }

  @Action(SetInitialUserState)
  setInitState(
    { getState, setState }: StateContext<UserStateModel>,
    action: SetInitialUserState
  ) {
    return this.boardListSer.getTaskerByUser("1").pipe(
      tap(tasker => {
        const state = getState();
        setState({
          ...tasker,
          boards: {
            boards: tasker.boards
          },
          list: {
            list: tasker.list
          },
          cards: {
            cards: { ...tasker.cards }
          }
        });
      })
    );
  }

  @Selector()
  static getSelectedBoard(state: UserStateModel) {
    return state.selectedboardId;
  }
}
