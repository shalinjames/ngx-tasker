import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { actionType, stateType } from "./store";
import { Board } from "../board/Board";

@Injectable({
  providedIn: "root"
})
export class StoreService {
  public state: stateType = {};
  public store = new Subject();
  constructor() {}
  public boardsReducer(state: stateType, action: actionType) {
    switch (action.type) {
      case "INIT":
        state.boards = action.boards;
    }
    this.store.next(state);
  }
  public setBoards(boards: Board[]) {
    console.log(boards);
    this.boardsReducer(this.state, { type: "INIT", boards });
  }
}
