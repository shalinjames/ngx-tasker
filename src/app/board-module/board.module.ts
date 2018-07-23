import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { BoardMaterialModule } from "./board-material-module";
import { routes } from "./routing/board-routes";
import { BoardComponent } from "./board/board.component";
import { BoardListComponent } from "./board-list/board-list.component";
import { NewBoardComponent } from "./new-board/new-board.component";
import { NewboardDialogComponent } from "./new-board/newboard-dialog/newboard-dialog.component";
import { ListModule } from "./list";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BoardMaterialModule,
    ListModule
  ],
  exports: [BoardListComponent, NewBoardComponent, RouterModule],
  declarations: [
    BoardComponent,
    BoardListComponent,
    NewBoardComponent,
    NewboardDialogComponent
  ],
  entryComponents: [NewboardDialogComponent]
})
export class BoardModule {}
