import { Component, OnInit } from "@angular/core";

import { BoardListService } from "./board-list/board-list.service";
import { StoreService } from "./store/store.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  constructor(
    private boardListService: BoardListService,
    private store: StoreService
  ) {}
  ngOnInit() {
    this.boardListService.getBoards().subscribe(boards => {
      this.store.setBoards(boards);
    });
  }
}
