import { Component, OnInit } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";

import { BoardState } from "../../store/board.state";
import { ListState } from "../../store/list.state";
import { AppUserState } from "../../store/app.user.state";
import { Board, List } from "../../types";
import { UpdateBoardTitle } from "../../store/board.actions";
import { UpdateBoardList } from "../../store/list.action";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.css"]
})
export class BoardComponent implements OnInit {
  @Select(AppUserState.getSelectedBoardId) boardId$: Observable<string>;
  @Select(BoardState.getSelectedBoard) board$: Observable<Board>;
  //@Select(ListState.getSelectedList) list$: Observable<List>;

  constructor(private store: Store) {}

  public keys = Object.keys;
  public board: Board;
  public list: List;
  public boardId: string;

  ngOnInit() {
    this.boardId$.subscribe(boardId => (this.boardId = boardId));
    this.board$.subscribe(board => {
      this.store.dispatch(new UpdateBoardList(this.boardId));
      this.board = board;
    });
    //this.list$.subscribe(list => (this.list = list));
  }
  public saveBoardTitle(newTitle) {
    this.store.dispatch(new UpdateBoardTitle(newTitle));
  }
}
