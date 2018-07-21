import { Route } from "@angular/router";

import { BoardListComponent } from "../board-list/board-list.component";
import { BoardComponent } from "../board/board.component";

export const routes: Route[] = [
  {
    path: "boardlist",
    component: BoardListComponent
  },
  {
    path: "board",
    component: BoardComponent
  }
];
