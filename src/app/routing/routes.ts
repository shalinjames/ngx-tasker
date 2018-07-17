import { Route } from "@angular/router";

import { BoardListComponent } from "../board-list/board-list.component";
import { BoardComponent } from "../board/board.component";
import { DashboardComponent } from "../dashboard/dashboard.component";

export const routes: Route[] = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "boardlist",
    component: BoardListComponent
  },
  {
    path: "board/:path",
    component: BoardComponent
  }
];
