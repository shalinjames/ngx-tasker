import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgxsModule } from "@ngxs/store";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./routing/app-routing.module";
import { AppComponent } from "./app.component";
import { BoardComponent } from "./board/board.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { BoardListComponent } from "./board-list/board-list.component";
import { BoardState } from "./store/board.state";
import { NewBoardComponent } from "./new-board/new-board.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    NavigationComponent,
    BoardListComponent,
    NewBoardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxsModule.forRoot([BoardState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
