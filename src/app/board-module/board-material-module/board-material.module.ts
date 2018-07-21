import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule
} from "@angular/material";

const includes = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule
];
@NgModule({
  imports: includes,
  exports: includes
})
export class BoardMaterialModule {}
