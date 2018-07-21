import { Route } from "@angular/router";

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
  }
];
