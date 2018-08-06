import { Component, OnInit } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";

import { ObjectFilter } from "../../common/utils";
import { BoardState } from "../../store/board.state";
import { ListState } from "../../store/list.state";
import { AppUserState } from "../../store/app.user.state";
import { Board, List } from "../../types";
import { UpdateBoardTitle } from "../../store/board.actions";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.css"]
})
export class BoardComponent implements OnInit {
  @Select(AppUserState.getSelectedBoardId) boardId$: Observable<string>;
  @Select(BoardState.getBoards) boards$: Observable<Board>;
  @Select(ListState.getList) list$: Observable<List>;

  constructor(private store: Store) {}

  public board: Board;
  public list;
  public boardId: string;

  ngOnInit() {
    this.boardId$.subscribe(boardId => {
      this.boardId = boardId;
    });
    this.boards$.subscribe(boards => {
      this.board = boards[this.boardId];
    });
    this.list$.subscribe(
      list =>
        (this.list = ObjectFilter(list, {
          key: "belongTo",
          value: this.boardId
        }))
    );
  }
  public saveBoardTitle(newTitle) {
    this.store.dispatch(new UpdateBoardTitle(newTitle));
  }
}
