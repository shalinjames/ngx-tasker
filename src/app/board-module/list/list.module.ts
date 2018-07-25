import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListComponent } from "./list/list.component";
import { ListMaterialModule } from "./list-material";
import { AppCommonModule } from "../../app.common.module";

@NgModule({
  imports: [CommonModule, ListMaterialModule, AppCommonModule],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ListModule {}
