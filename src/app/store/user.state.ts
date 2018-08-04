import {
  State,
  Action,
  StateContext,
  NgxsOnInit,
  Selector,
  Store
} from "@ngxs/store";

import { BoardListService } from "../webservices/boardlist/board-list.service";
import { UsersService } from "../webservices/users/users.service";
import { Board, Boards } from "../types/Board";
import { BoardState } from "./board.state";
import produce from "immer";
import { tap } from "rxjs/operators";
import { SetInitialUserState } from "./user.action";

export class UserStateModel {
  boards: Boards;
  users: [string];
  list: {
    [param: string]: {
      title: string;
      belongsTo: string;
    };
  };
  boardState: any;
  cards: {
    [param: string]: {
      title: string;
      belongsTo: string;
    };
  };
}

@State<UserStateModel>({
  name: "userState",
  children: [BoardState]
})
export class UserState implements NgxsOnInit {
  constructor(private boardListSer: BoardListService, store: Store) {}

  ngxsOnInit({ patchState, dispatch }: StateContext<UserStateModel>) {
    // this.boardListSer.getTaskerByUser("1").subscribe(tasker => {
    //   console.log(tasker);
    //   patchState({
    //     ...tasker
    //   });
    // });
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

  // @Selector()
  // static getBoards(state: UserStateModel) {
  //   return state.tasker.boards;
  // }
}
