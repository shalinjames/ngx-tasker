import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgxsModule } from "@ngxs/store";

import { AppRoutingModule } from "./routing/app-routing.module";
import { AppComponent } from "./app.component";
import { BoardComponent } from "./board/board.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { BoardListComponent } from "./board-list/board-list.component";
import { BoardState } from "./store/board.state";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    NavigationComponent,
    BoardListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxsModule.forRoot([BoardState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
