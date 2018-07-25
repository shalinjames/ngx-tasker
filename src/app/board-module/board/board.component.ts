import { Component, OnInit } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";

import { BoardState } from "../../store/board.state";
import { Board } from "../../types";
import { SetBoardTitle } from "../../store/board.actions";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.css"]
})
export class BoardComponent implements OnInit {
  @Select(BoardState.getSelectedBoard) board$: Observable<Board>;

  constructor(private store: Store) {}

  public keys = Object.keys;
  public board: Board;

  ngOnInit() {
    this.board$.subscribe(board => (this.board = board));
  }
  public saveBoardTitle(newTitle) {
    this.store.dispatch(new SetBoardTitle(newTitle));
  }
}
