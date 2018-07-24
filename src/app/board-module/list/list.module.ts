import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AutofocusModule } from "angular-autofocus-fix";

import { ListComponent } from "./list/list.component";
import { ListMaterialModule } from "./list-material";

@NgModule({
  imports: [CommonModule, ListMaterialModule, AutofocusModule],
  declarations: [ListComponent],
  exports: [ListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListModule {}
