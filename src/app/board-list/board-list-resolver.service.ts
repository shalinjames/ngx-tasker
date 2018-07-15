import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, of } from "rxjs";

import { Board } from "../board/Board";
import { BoardListService } from "./board-list.service";
import { StoreService } from "../store/store.service";

@Injectable({
  providedIn: "root"
})
export class BoardListResolverService implements Resolve<Observable<object>> {
  constructor(
    private boardListService: BoardListService,
    private str: StoreService
  ) {}
  private boards: Board[];
  resolve() {
    this.boardListService.getBoards().subscribe(boards => {
      this.str.setBoards(boards);
      this.boards = boards;
    });
    return of(this.boards);
  }
}
