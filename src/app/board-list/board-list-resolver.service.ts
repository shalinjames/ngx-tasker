import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";

import { BoardListService } from "./board-list.service";

@Injectable({
  providedIn: "root"
})
export class BoardListResolverService implements Resolve<Observable<object>> {
  constructor(private boardListService: BoardListService) {}
  resolve() {
    return this.boardListService.getBoards();
  }
}
