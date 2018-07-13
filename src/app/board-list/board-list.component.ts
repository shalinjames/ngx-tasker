import { Component, OnInit } from "@angular/core";

import { BoardListService } from "./board-list.service";

@Component({
  selector: "app-board-list",
  templateUrl: "./board-list.component.html",
  styleUrls: ["./board-list.component.css"]
})
export class BoardListComponent implements OnInit {
  constructor(private boardList: BoardListService) {}
  public boards = [];

  private getBoards() {
    this.boardList.getBoards().subscribe(boards => (this.boards = boards));
  }

  ngOnInit() {
    this.getBoards();
  }
}
