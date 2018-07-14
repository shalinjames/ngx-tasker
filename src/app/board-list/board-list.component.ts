import { Component, OnInit } from "@angular/core";

import { StoreService } from "../store/store.service";
import { stateType } from "../store/store";

@Component({
  selector: "app-board-list",
  templateUrl: "./board-list.component.html",
  styleUrls: ["./board-list.component.css"]
})
export class BoardListComponent implements OnInit {
  constructor(private storeService: StoreService) {}
  public boards = [];

  private getBoards() {
    this.storeService.store.subscribe(
      (state: stateType) => (this.boards = state.boards)
    );
  }

  ngOnInit() {
    this.getBoards();
  }
}
