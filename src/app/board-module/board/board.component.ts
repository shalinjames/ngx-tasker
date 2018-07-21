import { Component, OnInit } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";

import { BoardState } from "../../store/board.state";
import { Board } from "../../types";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.css"]
})
export class BoardComponent implements OnInit {
  @Select(BoardState.getSelectedBoard) board$: Observable<Board>;

  constructor() {}

  public board: Board;

  ngOnInit() {
    this.board$.subscribe(board => (this.board = board));
  }
}
