import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AutofocusModule } from "angular-autofocus-fix";

import { InlineTextEditorComponent } from "./common/inline-text-editor/inline-text-editor.component";

@NgModule({
  imports: [CommonModule, AutofocusModule],
  declarations: [InlineTextEditorComponent],
  exports: [InlineTextEditorComponent]
})
export class AppCommonModule {}
