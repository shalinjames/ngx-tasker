import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListComponent } from "./list/list.component";
import { ListMaterialModule } from "./list-material";
import { AppCommonModule } from "../../app.common.module";
import { AddListComponent } from "./add-list/add-list.component";

@NgModule({
  imports: [CommonModule, ListMaterialModule, AppCommonModule],
  declarations: [ListComponent, AddListComponent],
  exports: [ListComponent, AddListComponent]
})
export class ListModule {}
