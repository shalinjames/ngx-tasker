import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AutofocusModule } from "angular-autofocus-fix";

import { ListComponent } from "./list/list.component";
import { ListMaterialModule } from "./list-material";
import { AppCommonModule } from "../../app.common.module";
import { AddListComponent } from "./add-list/add-list.component";
import { CardsComponent } from "../cards/cards.component";
import { AddCardComponent } from "../add-card/add-card.component";

@NgModule({
  imports: [CommonModule, ListMaterialModule, AppCommonModule, AutofocusModule],
  declarations: [
    ListComponent,
    AddListComponent,
    CardsComponent,
    AddCardComponent
  ],
  exports: [ListComponent, AddListComponent, CardsComponent]
})
export class ListModule {}
