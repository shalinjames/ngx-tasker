import { NgModule } from "@angular/core";
import {
  MatCardModule,
  MatDividerModule,
  MatInputModule,
  MatIconModule
} from "@angular/material";

const includes = [
  MatCardModule,
  MatDividerModule,
  MatInputModule,
  MatIconModule
];
@NgModule({
  imports: includes,
  exports: includes
})
export class ListMaterialModule {}
