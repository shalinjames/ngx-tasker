import { NgModule } from "@angular/core";
import { MatCardModule, MatDividerModule } from "@angular/material";

const includes = [MatCardModule, MatDividerModule];
@NgModule({
  imports: includes,
  exports: includes
})
export class ListMaterialModule {}
