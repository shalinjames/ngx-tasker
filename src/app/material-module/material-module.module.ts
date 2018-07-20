import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule,
  MatDialogModule
} from "@angular/material";

const includes = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule,
  MatDialogModule
];
@NgModule({
  imports: includes,
  exports: includes
})
export class MaterialModuleModule {}
