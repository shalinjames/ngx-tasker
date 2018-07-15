import { Route } from "@angular/router";

import { BoardListComponent } from "../board-list/board-list.component";
import { BoardComponent } from "../board/board.component";
import { BoardListResolverService } from "../board-list/board-list-resolver.service";

export const routes: Route[] = [
  {
    path: "",
    redirectTo: "/boardlist",
    pathMatch: "full"
  },
  {
    path: "boardlist",
    component: BoardListComponent,
    resolve: { boards: BoardListResolverService }
  },
  {
    path: "board/:path",
    component: BoardComponent
  }
];
