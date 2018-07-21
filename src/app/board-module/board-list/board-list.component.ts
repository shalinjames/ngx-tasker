import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Store, Select } from "@ngxs/store";

import { BoardState } from "../../store/board.state";
import { SelectBoard } from "../../store/board.actions";
import { Board } from "../../types";

@Component({
  selector: "app-board-list",
  templateUrl: "./board-list.component.html",
  styleUrls: ["./board-list.component.css"]
})
export class BoardListComponent {
  @Select(BoardState.getBoards) boards$: Observable<any>;
  constructor(private router: Router, private store: Store) {}
  public keys = Object.keys;

  private navigate() {
    this.router.navigate(["/board"]);
  }
  public selectBoard(board: Board) {
    this.store.dispatch(new SelectBoard(board));
    this.navigate();
  }
}
