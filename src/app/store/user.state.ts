import { State, Action, StateContext, NgxsOnInit, Selector } from "@ngxs/store";

import { BoardListService } from "../webservices/boardlist/board-list.service";
import { UsersService } from "../webservices/users/users.service";

export class UserStateModel {
  tasker: {
    boards: {
      [param: string]: {
        title: string;
      };
    };
    users: [string];
    list: {
      [param: string]: {
        title: string;
        belongsTo: string;
      };
    };
    cards: {
      [param: string]: {
        title: string;
        belongsTo: string;
      };
    };
  };
}

@State<UserStateModel>({
  name: "userState"
})
export class UserState implements NgxsOnInit {
  constructor(private boardListSer: BoardListService) {}

  ngxsOnInit({ patchState }: StateContext<UserStateModel>) {
    this.boardListSer.getTaskerByUser("1").subscribe(tasker => {
      patchState({
        tasker
      });
    });
  }

  @Selector()
  static getBoards(state: UserStateModel) {
    return state.tasker.boards;
  }
}
