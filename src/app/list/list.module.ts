import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListComponent } from "./list/list.component";
import { ListMaterialModule } from "./list-material";

@NgModule({
  imports: [CommonModule, ListMaterialModule],
  declarations: [ListComponent],
  exports: [ListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListModule {}
