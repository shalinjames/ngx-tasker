import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";

import { UserState } from "./user.state";
import { BoardState } from "./board.state";
import { ListState } from "./list.state";

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot([UserState, BoardState, ListState]),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  declarations: []
})
export class StoreModule {}
