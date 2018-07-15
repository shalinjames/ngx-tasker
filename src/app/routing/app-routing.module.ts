import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { BoardListResolverService } from "../board-list/board-list-resolver.service";
import { routes } from "./routes";

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [BoardListResolverService]
})
export class AppRoutingModule {}
