import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { StoreService } from "../store/store.service";
import { stateType } from "../store/store";

@Component({
  selector: "app-board-list",
  templateUrl: "./board-list.component.html",
  styleUrls: ["./board-list.component.css"]
})
export class BoardListComponent implements OnInit {
  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute
  ) {}
  public boards = [];

  private getBoards() {
    this.storeService.store.subscribe((state: stateType) => {
      console.log(state.boards);
      this.boards = state.boards;
    });
  }

  private setBoards() {
    this.boards = this.route.snapshot.data.boards;
    this.storeService.setBoards(this.route.snapshot.data.boards);
  }

  ngOnInit() {
    this.setBoards();
    this.getBoards();
  }
}
