import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";

import { Store } from "@ngxs/store";
import { AddBoard } from "../store/board.actions";
import { NewboardDialogComponent } from "./newboard-dialog/newboard-dialog.component";

@Component({
  selector: "app-new-board",
  templateUrl: "./new-board.component.html",
  styleUrls: ["./new-board.component.css"]
})
export class NewBoardComponent implements OnInit {
  constructor(private store: Store, private dialog: MatDialog) {}

  addBoard(boardName: string) {
    this.store.dispatch(new AddBoard(boardName));
  }

  openNewBoardDialog() {
    const dialogRef = this.dialog.open(NewboardDialogComponent, {
      data: { boardname: "" }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.addBoard(result);
    });
  }
  ngOnInit() {}
}
