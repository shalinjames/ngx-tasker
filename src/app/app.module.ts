import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BoardComponent } from "./board/board.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { BoardListComponent } from "./board-list/board-list.component";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    NavigationComponent,
    BoardListComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
