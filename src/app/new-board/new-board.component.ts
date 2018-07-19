import { Component, OnInit } from "@angular/core";

import { Store } from "@ngxs/store";
import { AddBoard } from "../store/board.actions";

@Component({
  selector: "app-new-board",
  templateUrl: "./new-board.component.html",
  styleUrls: ["./new-board.component.css"]
})
export class NewBoardComponent implements OnInit {
  constructor(private store: Store) {}
  public showNew = false;
  public toggleNew() {
    this.showNew = !this.showNew;
  }
  onEnter(boardName: string) {
    this.store.dispatch(new AddBoard(boardName));
    this.toggleNew();
  }
  ngOnInit() {}
}
