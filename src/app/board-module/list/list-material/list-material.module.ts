import { NgModule } from "@angular/core";
import {
  MatCardModule,
  MatDividerModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule
} from "@angular/material";

const includes = [
  MatCardModule,
  MatDividerModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule
];
@NgModule({
  imports: includes,
  exports: includes
})
export class ListMaterialModule {}
