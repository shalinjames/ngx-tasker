import { State, Action, StateContext, NgxsOnInit, Store } from "@ngxs/store";

import { BoardListService } from "../webservices/boardlist/board-list.service";
import { Boards, List } from "../types";
import { BoardState } from "./board.state";
import produce from "immer";
import { tap } from "rxjs/operators";
import { SetInitialUserState } from "./user.action";

export class UserStateModel {
  boards: Boards;
  users: [string];
  list: List;
  cards: {
    [param: string]: {
      title: string;
      belongsTo: string;
    };
  };
  selectedBoard: string;
}

@State<UserStateModel>({
  name: "user",
  children: [BoardState]
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
          ...tasker
        });
      })
    );
  }
}
