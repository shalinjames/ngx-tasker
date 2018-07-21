import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./routing/app-routing.module";
import { AppComponent } from "./app.component";
import { BoardComponent } from "./board/board.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { BoardListComponent } from "./board-list/board-list.component";
import { NewBoardComponent } from "./new-board/new-board.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MaterialModuleModule } from "./material-module/material-module.module";
import { NewboardDialogComponent } from "./new-board/newboard-dialog/newboard-dialog.component";
import { StoreModule } from "./store";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    NavigationComponent,
    BoardListComponent,
    NewBoardComponent,
    DashboardComponent,
    NewboardDialogComponent
  ],
  imports: [
    StoreModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MaterialModuleModule,
    BrowserAnimationsModule
  ],
  entryComponents: [NewboardDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
